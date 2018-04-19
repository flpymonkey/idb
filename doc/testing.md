# Backend testing

We are using Postman to test our API endpoints at api.natphoto.me. We are using
the Python unittest library to test our Python Flask code.

Tools we use for testing:
1. **Postman** - Software for testing API endpoints and automating unit testing
on requests to api.natphoto.me. Postman tests can be found in [Postman.json](../Postman.json).

2. **unittest** - Software for testing the backend API code. These tests can be
found in `backend/tests.py`. These tests can be run with the command
`make backend` from `idb/`.

## Testing methodology for Postman

* Test whether the response status is 200 or 404 depending on if we are testing
  for a successful response or an expected 404 for a bad request
* Test if the JSON returned in the response is valid JSON
* Test that the response includes/excludes expected strings based on our API parameters

## Testing methodology for unit tests

* Test whether the response status is 200 or 404 depending on if we are testing
  for a successful response or an expected 404 for a bad request
* Test that response JSON list is the expected length with respect to the parameters
  given for the specific test request

# Frontend testing

Tools we use for testing:

1. **Mocha** - Software for testing JavaScript and JSX within React. These tests
can be found in `idb/frontend/test/tests.js`. These tests can be run with the
command `make frontend` from `idb/`.

2. **Selenium** - Software for testing GUI of website. These tests can be found
in `idb/frontend/guitests.py`. You can run them with the command `make selenium`
from `idb/`.

##Testing methodology for Mocha
* Tests whether or not a page will render correctly to ensure that there will be no
errors when loading a page
* Tests whether or not the fetch function works in components that require it to ensure
that data is pulled from the API correctly
* Tests whether or not a component that relies on props will receive it correctly and
display it in the correct way

##Testing methodology for Selenium
* Uses chromedriver to test GUI of our website
* Tests navigation by clicking through each page using the NavBar links and
ensuring that each link renders the correct data and components
* Tests that each page contains every element that it should. For example, the
Home page contains all elements of the NavBar, the title and description of the
website, and icons
* Tests navigation between grids and detail pages by visiting the grid pages
(parks, cameras, photos) and clicking a card that leads to the detail page of an
element corresponding to the card clicked
* Tests that the pages are still reachable when using the back navigation in the browser
