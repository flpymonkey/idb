# NatPhoto.me

[![Build Status](https://travis-ci.org/flpymonkey/idb.svg?branch=master)](https://travis-ci.org/flpymonkey/idb)

There is a lot that goes into a photograph. Natphoto.me shows off the  
beautiful United States National Parks while giving you an inside look at the  
lens that took the photo. The project connects cameras, photos  
taken by those cameras, and the locations of the photos \(one of the national  
parks in the US\).

This website was created for the series of Internet DataBase \(IDB\) projects
for Professor Glenn Downing's CS373: Software Engineering course. This project
tasked us in creating a web application that emulates [IMDB][IMDB] to provide
some useful and interesting information about a topic.

# Prerequisites

In order to run and build this application you will need a working version of
`pip` (python 3) and `npm`. Other requirements can be installed by running
the following command in the root directory of the project.

```
make install
```

Note that the `install` target is automatically called when testing with
`make frontend`, `make backend`, and `make selenium`.

To manually install the project dependencies, use the following commands:

- python: `pip install -r requirements.txt`
- js: `cd frontend && npm install`

# API

The documentation for the natphoto.me API can be found here:

[https://flpymonkey.gitbooks.io/api/content/](https://flpymonkey.gitbooks.io/api/content/)

# Presentation

A GitPitch presentation for this project can be found here:

[https://gitpitch.com/flpymonkey/idb](https://gitpitch.com/flpymonkey/idb)

[IMDB]: https://www.imdb.com
