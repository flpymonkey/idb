from sqlalchemy import create_engine, MetaData
from sqlalchemy.sql import select
import json

from flask import Flask
from flask_restful import reqparse, abort, Api, Resource

# Path to the database credentials file
database_creds = '../idb_scraper/dbinfo.txt'

# Flask API setup
app = Flask(__name__)
api = Api(app)

##
## Park
##
# shows a single park
class Park(Resource):
    def get(self, park_name):
        result = handler.get_park(park_name)
        return [dict(r) for r in result]

# shows a list of all parks
class ParkList(Resource):
    def get(self):
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
class PhotoList(Resource):
    def get(self):
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
# shows a single camera
class Camera(Resource):
    def get(self, camera_name):
        result = handler.get_camera(camera_name)
        return [dict(r) for r in result]

class CameraList(Resource):
    def get(self):
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

    def get_photos(self):
        '''
        Get all photos from the database
        '''
        photos_table = self.metadata.tables['photos']
        sel = select([photos_table])
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
api.add_resource(CameraList, '/cameras')
api.add_resource(Camera, '/cameras/<camera_name>')

handler = DataHandler(database_creds)

if __name__ == '__main__':
    app.run(debug=True)
