"""
main.py
natphoto
"""

from flask import Flask, render_template

import flickrapi
api_key = "907cb3aabdbf0aefbaf5a0616e63d896"
api_secret = "106bf23144feb125"
flickr = flickrapi.FlickrAPI(api_key, api_secret)

app = Flask(__name__)

# Consider importing datetime and using timedelta for
# only photos within a certain time delta TODO

@app.route("/")
def main():
    return render_template("mainpage.html")


#@app.route("/photos/id/<id>")
#def photo_url_by_id(id):
#    sets   = flickr.photosets.getList(photo_ids = [str(id)])
#    photo_url = sets.photosets.
#    return str(photo_urls)

@app.route("/photos/<location>")
def show_photo_by_location(location):
    photo_titles = []
    for photo in flickr.walk(tag_mode='all',
        location= '%s' % str(location),
        min_taken_date='2017-11-10'):
        photo_titles.append(photo.get('title'))
        if len(photo_titles) > 10:
            break
    return str(photo_titles)

@app.route("/photos/tag/<tag>")
def show_photo_by_tag(tag):
    photo_titles = []
    for photo in flickr.walk(tag_mode='all',
        tags= '%s' % str(tag),
        min_taken_date= '2017-12-20'):
        photo_titles.append(photo.get('title'))
        if len(photo_titles) > 10:
            break
    return str(photo_titles)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
