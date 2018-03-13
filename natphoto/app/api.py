from sqlalchemy import create_engine, MetaData
from sqlalchemy.sql import select

class DataHandler (object):
    def __init__(self, dbfile):
        '''
        Initializes a PhotoHandler object to make calls to the database
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
        parks_table = self.metadata.tables['parks']
        sel = select([parks_table])
        result = self.connection.execute(sel)
        return result
