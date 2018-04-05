# Searching

This file outlines how we implemented the search bar and search page for natphoto.me.

## Backend

The only changes we made on the backend to allow for searching functionality was
the addition of the `api.natphoto.me/all` API endpoint which simply dumps all of
our model instances into one list.

This was done by adding the `AllList` resource to our Flask-RESTful API framework
in `main.py`. This class simply makes three calls to our database (one for cameras,
parks, and photos), puts all of these results into one results list, and then returns
the list. This allows for the searching functionality to be implemented on the frontend.

## Frontend

Our searching logic is handled in the frontend with a library called `Fuse.js`.
Visiting the search page on our site simply makes a request to the `api.natphoto.me/all`
endpoint of our API which then returns a json list containing all of the model instances
in our database. After obtaining all of the searchable data, searching logic is then
handled by the frontend `Fuse.js` library as outlined below.

* Fuse.js - is the JavaScript search library we used to search through our data quickly.
This library is used in our `Search.js` file, inside of our `Search` component.
Some interesting design decisions we made include giving camera and park names
relatively high search weights while other fields have relatively low weights (so that
cameras and parks show up first when a name is searched for, instead of a photo
taken by a camera or in a park), and allowing for a small fuzzy threshold and distance
which allows for search to still work even with typos or vague terms.

* Navigation bar search - We used the `Redirect` component from the react-router library
to allow for people to type things into our search bar in our navigation bar on
any page of our website, and then be redirected to our search page with search
results when they press enter.
