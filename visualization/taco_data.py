import requests
import json

# Global Variables

BASE_URL = 'http://api.tacoboutaustin.me/'

class DataHandler(object):
    def __init__(self, endpoint):
        self.url = BASE_URL + endpoint
        self.data = None

    def fetch_data(self):
        session = requests.Session()
        response = session.get(self.url)
        if (response.status_code == requests.codes.ok):
            self.data = json.loads(response.text)

    def clean_data_for_ratings(self):
        elems = self.data['list']

        ratings = [0, 0, 0, 0, 0]
        for e in elems:
            if(e['rating'] == 5):
                ratings[4]+=1
            elif(e['rating'] > 4):
                ratings[3]+=1
            elif(e['rating'] > 3):
                ratings[2]+=1
            elif(e['rating'] > 2):
                ratings[1]+=1
            elif(e['rating'] > 1):
                ratings[0]+=1

        return ratings

    def write_data(self, data, filename):
      _json = json.dumps(data)
      file = open(filename, "w")
      file.write(_json)
      file.close()


handler = DataHandler('attractions')
handler.fetch_data()
ratings = handler.clean_data_for_ratings()
handler.write_data(ratings, "attraction_ratings.json")

handler = DataHandler('hotels')
handler.fetch_data()
ratings = handler.clean_data_for_ratings()
handler.write_data(ratings, "hotel_ratings.json")

handler = DataHandler('restaurants')
handler.fetch_data()
ratings = handler.clean_data_for_ratings()
handler.write_data(ratings, "restaurant_ratings.json")
