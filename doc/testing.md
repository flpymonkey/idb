# Backend testing

We are using Postman to test our API endpoints at api.natphoto.me. We are using
the Python unittest library to test our Python Flask code.

Tools we use for testing:
1. **Postman** - Software for testing API endpoints and automating unit testing
on requests to api.natphoto.me. Postman tests can be found in [Postman.json](../Postman.json).

2. **unittest** - Used to test our Python Flask code which is used to serve the
API endpoints. Run these tests using `python tests.py`.

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

1. **Mocha** - Software for testing JavaScript and JSX within React

2. **Selenium** - Software for testing GUI of website
