from sqlalchemy import create_engine, MetaData, and_
from sqlalchemy.sql import select
import json

from flask import Flask
from flask_restful import reqparse, abort, Api, Resource

# Path to the database credentials file
database_creds = 'dbinfo.txt'

# Flask API setup
app = Flask(__name__)
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
        return [dict(r) for r in result]

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
        while row is not None:
            results.append(dict(row))
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
        result = handler.get_photo(photo_id)
        return [dict(r) for r in result]

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
        return [dict(r) for r in result]

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
        while row is not None:
            results.append(dict(row))
            row = result.fetchone()
        return results

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
    
##
## Api resource routing here
##
api.add_resource(ParkList, '/parks')
api.add_resource(Park, '/parks/<park_name>')
api.add_resource(PhotoList, '/photos')
api.add_resource(Photo, '/photos/<photo_id>')
api.add_resource(CameraList, '/cameras')
api.add_resource(Camera, '/cameras/<camera_name>')

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

def add(a: int, b: int) -> int:
    """
    Temporary function for testing travis
    """
    return a + b

if __name__ == '__main__':
    app.run(debug=True)
