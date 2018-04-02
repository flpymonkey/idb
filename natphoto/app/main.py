from sqlalchemy import create_engine, MetaData, and_
from sqlalchemy.sql import select
import json
import requests

from flask import Flask, abort
from flask_restful import reqparse, abort, Api, Resource

# Path to the database credentials file
database_creds = 'dbinfo.txt'

# Flask API setup
app = Flask(__name__)
app.url_map.strict_slashes = False
api = Api(app)

##
## Park
##
class Park(Resource):
    """
    shows a single park
    """
    def get(self, park_name):
        result = handler.get_park(park_name)
        number_of_photos = len([dict(r) for r in handler.get_photos_by_park(park_name)])
        response = [dict(r) for r in result]
        if len(response) == 0:
            abort(404)
        response[0]['number_of_photos'] = number_of_photos
        return response

class ParkList(Resource):
    """
    shows a list of all parks
    """
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('camera')
        args = parser.parse_args()
        if args['camera'] is not None:
            result = handler.get_parks_by_camera(args['camera'])
        else:
            result = handler.get_parks()
        row = result.fetchone() #use fetchone() because the query returns lots of rows
        results=[]

        # retrieve the photo counts
        counts = handler.get_num_photos_by_parks()
        counts_dict = dict()
        for park in counts:
            counts_dict[park[1]] = park[0]

        while row is not None:
            park = dict(row)
            if park['name'] in counts_dict:
                number_of_photos = counts_dict[park['name']]
            else:
                number_of_photos = 0
            park['number_of_photos'] = number_of_photos
            results.append(park)
            row = result.fetchone()
        return results

##
## Photo
##

class Photo(Resource):
    """
    Return a single photo resource
    """
    def get(self, photo_id):
        try:
            int(photo_id)
        except ValueError:
            abort(404)

        result = handler.get_photo(photo_id)
        response = [dict(r) for r in result]
        if len(response) == 0:
            abort(404)
        return response

class PhotoList(Resource):
    """
    Get a container with all photo data
    """
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('park')
        parser.add_argument('camera')
        args = parser.parse_args()

        if args['park'] is not None and args['camera'] is not None:
            result = handler.get_photos_by_park_camera(args['park'], args['camera'])
        elif args['park'] is not None:
            result = handler.get_photos_by_park(args['park'])
        elif args['camera'] is not None:
            result = handler.get_photos_by_camera(args['camera'])
        else:
            result = handler.get_photos()

        row = result.fetchone() #use fetchone() because the query returns lots of rows
        results=[]
        while row is not None:
            results.append(dict(row))
            row = result.fetchone()
        return results

##
## Camera
##
class Camera(Resource):
    """
    shows a single camera
    """
    def get(self, camera_name):
        result = handler.get_camera(camera_name)
        number_of_photos = len([dict(r) for r in handler.get_photos_by_camera(camera_name)])
        response = [dict(r) for r in result]
        if len(response) == 0:
            abort(404)
        response[0]['number_of_photos'] = number_of_photos
        return response

class CameraList(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('park')
        args = parser.parse_args()

        if args['park'] is not None:
            result = handler.get_cameras_by_park(args['park'])
        else:
            result = handler.get_cameras()

        row = result.fetchone() #use fetchone() because the query returns lots of rows
        results=[]

        # Getting counts of photos per camera
        counts = handler.get_num_photos_by_cameras()
        counts_dict = dict()
        for camera in counts:
            counts_dict[camera[1]] = camera[0]

        while row is not None:
            camera = dict(row)
            if camera['name'] in counts_dict:
                number_of_photos = counts_dict[camera['name']]
            else:
                number_of_photos = 0
            camera['number_of_photos'] = number_of_photos
            results.append(camera)
            row = result.fetchone()
        return results

class AllList(Resource):
    def get(self):

        cameras = handler.get_cameras()
        parks = handler.get_parks()
        photos = handler.get_photos()

        results=[]

        row = cameras.fetchone() #use fetchone() because the query returns lots of rows
        while row is not None:
            camera = dict(row)
            results.append(camera)
            row = cameras.fetchone()

        row = parks.fetchone() #use fetchone() because the query returns lots of rows
        while row is not None:
            park = dict(row)
            results.append(park)
            row = parks.fetchone()

        row = photos.fetchone() #use fetchone() because the query returns lots of rows
        while row is not None:
            photo = dict(row)
            results.append(photo)
            row = photos.fetchone()

        return results

GITHUB_ROOT_ = "https://api.github.com"
USERS_ = ["flpymonkey", "jhbell", "vargasbri2", "tonydenapoli", "dayannyc"]
BACKUP_DATA = [{"vargasbri2": 18,"dayannyc": 24,"tonydenapoli": 47,"jhbell": 64,
            "flpymonkey": 8},{"flpymonkey": 15,"jhbell": 30,"vargasbri2": 8,"tonydenapoli": 10,
            "dayannyc": 8},233,71]

def get_json(request_path, params = {}):
    """
    Return the JSON result for the given request path
    request_path - the path to the data we are requesting
    """
    url = GITHUB_ROOT_ + request_path
    response = requests.get(url, params=params)
    response = response.json()
    return response

class About(Resource):
    def get(self):
        try:
            commits = handler.get_user_commits()
            issues = handler.get_user_issues()
            if (len(commits) > 0 and len(issues) > 0):
                return [commits, issues, sum(commits.values()), sum(issues.values())]
            else:
                # If github api fails return hardcoded values
                return BACKUP_DATA
        except:
            # If github api fails return hardcoded values
            return BACKUP_DATA


##
## DataHandler
##
# A general class to access data in the database
class DataHandler (object):
    def __init__(self, dbfile):
        '''
        Initializes a DataHandler object to make calls to the database
        dbfile: a string file path to the file that contains database login credentials
        '''
        engine_string = None
        with open(dbfile, "r") as dbinfo:
            engine_string = str(dbinfo.readline())
        if engine_string is None:
            raise Exception("Could not load dbinfo.txt")

        self.engine = create_engine(engine_string)
        self.connection = self.engine.connect()
        self.metadata = MetaData()
        self.metadata.reflect(bind=self.engine)

    def get_parks_by_camera(self, camera):
        """
        Get all parks that a camera was used at
        """
        parks_table = self.metadata.tables['parks']
        photos_table = self.metadata.tables['photos']
        my_join = parks_table.join(photos_table,
                    parks_table.c.name == photos_table.c.park)
        sel = select([parks_table]).select_from(my_join).where(photos_table.c.camera == camera)
        result = self.connection.execute(sel)
        return result

    def get_parks(self):
        '''
        Get all parks in the database
        '''
        parks_table = self.metadata.tables['parks']
        sel = select([parks_table])
        result = self.connection.execute(sel)
        return result

    def get_park(self, name):
        '''
        Get a single park from the database by name
        '''
        parks_table = self.metadata.tables['parks']
        sel = select([parks_table]).where(parks_table.c.name == name)
        result = self.connection.execute(sel)
        return result

    def get_photos_by_park_camera(self, park, camera):
        """
        Gets all photos taken at a specific park with a specific camera
        """
        photos_table =  self.metadata.tables['photos']
        sel = select([photos_table]).where(
                and_(photos_table.c.camera == camera,
                     photos_table.c.park == park))
        result = self.connection.execute(sel)
        return result

    def get_photos_by_camera(self, camera):
        """
        Gets all photos taken with a specific camera
        """
        photos_table =  self.metadata.tables['photos']
        sel = select([photos_table]).where(photos_table.c.camera == camera)
        result = self.connection.execute(sel)
        return result

    def get_photos_by_park(self, park):
        """
        Gets all photos taken at a specific park
        """
        photos_table =  self.metadata.tables['photos']
        sel = select([photos_table]).where(photos_table.c.park == park)
        result = self.connection.execute(sel)
        return result

    def get_photos(self):
        """
        Get all photos from the database
        """
        photos_table = self.metadata.tables['photos']
        sel = select([photos_table])
        result = self.connection.execute(sel)
        return result

    def get_photo(self, id):
        """
        Get a single photo from the database by name
        """
        photos_table = self.metadata.tables['photos']
        sel = select([photos_table]).where(photos_table.c.id== id)
        result = self.connection.execute(sel)
        return result

    def get_cameras_by_park(self, park):
        """
        Get all cameras that are used at this park
        """
        cameras_table = self.metadata.tables['cameras']
        photos_table = self.metadata.tables['photos']
        my_join = cameras_table.join(photos_table,
                    cameras_table.c.name == photos_table.c.camera)
        sel = select([cameras_table]).select_from(my_join).where(photos_table.c.park == park)
        result = self.connection.execute(sel)
        return result

    def get_cameras(self):
        '''
        Get all cameras from the database
        '''
        cams_table = self.metadata.tables['cameras']
        sel = select([cams_table])
        result = self.connection.execute(sel)
        return result

    def get_camera(self, name):
        '''
        Get a single park from the database by name
        '''
        cameras_table = self.metadata.tables['cameras']
        sel = select([cameras_table]).where(cameras_table.c.name == name)
        result = self.connection.execute(sel)
        return result

    def get_num_photos_by_parks(self):
        """
        Get a list of park names matched to number of photos of that park
        """
        photos_table = self.metadata.tables['photos']
        q = "select count(photos.id), park from photos group by park"
        result = self.connection.execute(q)
        return result

    def get_num_photos_by_cameras(self):
        """
        Get a list of camera names matched to number of photos taken with that
        camera
        """
        photos_table = self.metadata.tables['photos']
        q = "select count(photos.id), camera from photos group by camera"
        result = self.connection.execute(q)
        return result

    # Get dynamic data from GITHUB API for the about page
    def get_user_commits(self):
        """
        Get the contribution data for the project repository
        return a json responce containing contribution statistics
        """
        path = "/repos/flpymonkey/idb/stats/contributors"
        commit_data = get_json(path)
        commits = {data["author"]["login"]: data["total"] for data in commit_data}
        return commits

    # Get dynamic data from GITHUB API for the about page
    def get_user_issues(self):
        """
        Get all of the issues and count by user
        return a dict() of users to the number of issues they created.
        """
        path = "/repos/flpymonkey/idb/issues"
        issues = {}
        for user in USERS_:
            response = get_json(path, {"creator": user, "state": "all"})
            issues[user] = len(response)
        return issues

##
## Api resource routing here
##
api.add_resource(AllList, '/all')
api.add_resource(ParkList, '/parks')
api.add_resource(Park, '/parks/<park_name>')
api.add_resource(PhotoList, '/photos')
api.add_resource(Photo, '/photos/<photo_id>')
api.add_resource(CameraList, '/cameras')
api.add_resource(Camera, '/cameras/<camera_name>')
api.add_resource(About, '/about')

handler = DataHandler(database_creds)

##
## Handle the CORS issues
##
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

if __name__ == '__main__':
    app.run(debug=True)
