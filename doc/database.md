# Creating and accessing the database

Our database is set up with PostgreSQL 9.6.6 on the Amazon RDB service.
We access the contents of our database using SQLAlchemy. This allows us to retrieve
data from our database to serve to our API endpoints.

Tools we use for our database and data retrieval:

1. **PostgreSQL** - The SQL based database engine we use on our Amazon Relational
Database Service instance.

2. **SQLAlchemy** - A Python library we use to perform queries on the database and
retrieve data to serve to our API endpoints.


# Populating the database

We populated our database with data culminated using a data scraper which can be
found at https://github.com/flpymonkey/idb_scraper. We first used the National
Park Service API found at https://www.nps.gov/subjects/digital/nps-data-api.htm
to populate a national park table with all national parks listed in the API. We
then used the names of the national parks to scrape image data from flickr's API
(https://www.flickr.com/services/api/) for each national park. We used this scraped
data to populate the photos table of our database. Finally, we populated the
cameras table of our database by using the cameras associated with the photos we
pulled from flickr, and then getting more information from Best Buy's API
(https://developer.bestbuy.com/) for each camera so that we can populate the cameras
table.


# Design of the database

The database contains three tables (one for each model) for parks, photos, and cameras.
The columns of these tables correspond to the model attributes defined in [models](models.md).


# Types of database queries used

The database queries used to serve data from our database to the API endpoints are
performed in `/natphoto/app/main.py`.

Most of the queries performed were relatively simple; such as selecting all photos
where a given camera was used or selecting all photos taken in a particular national
park. However, one of the more complicated database queries we used was selecting
all cameras used in a particular park. We did this by joining the cameras table
with the photos table on the name of the camera, and then selecting the cameras
in this joined table which were used to take a photo in the desired national park.
