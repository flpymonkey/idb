@title[Introduction]

# Natphoto

### SWEet Tea

---

# Overview

---

## Backend Team

<img width = 30% src="./frontend/src/static/photos/jeff.png">

| Jeff Bell |
| -------- |
| Server, AWS, API, Searching, Sorting, Styling |

---

## Backend Team

<img width = 30% src="./frontend/src/static/photos/ben.png">

| Ben Johnson |
| -------- |
| API, AWS, Searching, Routing, Styling |

---

## Frontend Team

<img width = 30% src="./frontend/src/static/photos/tony.png">

| Tony DeNapoli |
| -------- |
| Sorting, Filtering, Design, React, Styling |

---

## Frontend Team

<img width = 30% src="./frontend/src/static/photos/dayanny.png">

| Dayanny Caballero |
| -------- |
| Sorting, Filtering, Design, React, Styling |

---

## Frontend Team

<img width = 30% src="./frontend/src/static/photos/bri.png">

| Bri Vargas |
| -------- |
| Sorting, Filtering, Design, React, Styling |

---

# Backend

---

## Backend Tools

- EC2 -- API server
- S3 -- React static hosting
- Route53 -- Nameservers
- RDS -- Database Hosting
- PostgreSQL -- Database
- Docker -- Server container
- tiangolo/uwsgi-nginx-flask/ -- Baseline docker image

---

## The API Server

EC2 instance running docker container
```
FROM tiangolo/uwsgi-nginx-flask:python3.6

RUN pwd

# Copy in the current files
COPY ./requirements.txt /app/requirements.txt

# Install the required files for the app
RUN pip install -r requirements.txt

COPY ./backend /app
```

---

## Building and Running with Docker

Build the docker server
```bash
docker build -t natphoto -f Dockerfile.web .
```

Run the server as a daemon
```bash
docker run -d --name natphoto_run --restart=always -p 80:80 -t natphoto
```

---

# Natphoto.me API

---

| Camera | Photo | Park |
| -------- | -------- | -------- |
| All cameras | All photos | All parks |
| Detail | Detail | Detail |
| By park | By park or camera | By camera |

---

### Usage Examples

Get a list of all parks that are shot by a particular camera
```
http://api.natphoto.me/parks?camera=<camera name>
```

Get the details for a specific photo
```
http://api.natphoto.me/photos/123
```

Get a list of all photos taken in Yellowstone with the Canon EOS 5D Mark III
```
http://api.natphoto.me/photos?park=Yellowstone%20National%20Park&camera=Canon%20EOS%205D%20Mark%20III
```

---

## All

Retrieve data from the `api.natphoto.me/all` endpoint in our API.
```
http://api.natphoto.me/all
```

---

## How we made the frontend

- Create-react-app
- React-router
- React-strap Rows and Cols
- Components
- npm

---

```bash
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── About.js
│   │   │   ├── CameraDetailPage.js
│   │   │   ├── CameraGrid.js
│   │   │   ├── Carousel.js
│   │   │   ...
│   │   └── stylesheets
│   │   │   ├── About.css
│   │   │   ├── CameraDetailPage.css
│   │   │   ├── CameraGrid.css
│   │   │   ├── Carousel.css
│   │   │   ...

```

---

## Things that went well...

- Meeting bi-weekly requirements |
- Postman |
- Getting feedback from other teams |
- Keeping consistent coding style |
- Breaking down code into components |
- Pair programming |

---

## Things that didn't go well...

- We could have used more branches |
- Bri's commits :( |
- Could not get multi-select dropdowns for filtering |
- AWS charges |
- Mocha testing |

---

## What we learned

- React
- Filtering on the frontend
- Fetching
- How to use AWS
- Dockerized server

---

## Things that puzzle us

- Differences in browsers (Safari, Firefox) |
- More professional styling and features |

---

# TacoBoutAustin

---

## What They Did Well

- Taco theme
  - Ratings
  - Loading
  - Logo
- Visually pleasing
- Seperate tabs for searching different models
- Concept
- Filtering

---

## What They Could do better

- "Rating of at least"
- Unclear what the user is filtering by
- Inconsistent font sizing across site

---

## What We Learned

Grid Cards
PUT IMAGES

---

## Puzzles us

- Not using fetch to hit API
- XML fetches

---

# Demo and Visualization

[natphoto.me][http://natphoto.me]

---

# Questions?

---
