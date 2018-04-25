@title[Introduction]
---?color=#c7f9d2
# Natphoto

### SWEet Tea
---?color=#c7f9d2

## Overview
---?color=#c7f9d2

## Backend Team
<img src="./frontend/src/static/photos/ben.png">
<img src="./frontend/src/static/photos/jeff.png">

| Ben Johnson | Jeff Bell |
| -------- | -------- | 
| DID THINGS | ALSO DID THINGS |

---?color=#c7f9d2

## Frontend Team

![](./frontend/src/static/photos/tony.png) ![](./frontend/src/static/photos/dayanny.png)

---?color=#c7f9d2

## Natphoto.me API

---?color=#c7f9d2

| Camera | Photo | Park |
| -------- | -------- | -------- |
| All cameras | All photos | All parks |
| Detail | Detail | Detail |
| By park | By park or camera | By camera |

---?color=#c7f9d2

### Usage Examples

Get a list of all cameras
```
http://api.natphoto.me/cameras
```

Get a list of all parks that are shot by a particular camera
```
http://api.natphoto.me/parks?camera=Canon%20EOS%2080D
```

Get the details for a specific photo
```
http://api.natphoto.me/photos/123
```

---?color=#c7f9d2

## All

Retrieve data from the `api.natphoto.me/all` endpoint in our API.

### Request

**GET** `/all`
* Returns a list of all model instances in our database (all photos, cameras, and
  parks)
* Additional Parameters:
  * None
* Return Content-Type: application/json

---?color=#c7f9d2

### Usage Examples

Get a list of all model instances in our database
```
http://api.natphoto.me/all
```
---?color=#c7f9d2
## How we made the frontend
- Create-react-app
- React-router
- React-strap Rows and Cols
- Components
- npm
---?color=#c7f9d2

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
---?color=#c7f9d2
## Things that went well...
- Meeting bi-weekly requirements |
- Getting feedback from other teams |
- Keeping consistent coding style |
- Breaking down code into components |
- Pair programming |
---?color=#c7f9d2

## Things that didn't go well...
- We didn't use branches |
- Bri's commits :( |
- Could not get multi-select dropdowns for filtering |
- AWS charges |
- Mocha testing |
---?color=#c7f9d2

## What we learned
- React
- Filtering on the frontend
- Fetching
- How to use AWS
- Dockerized server
---?color=#c7f9d2

## Things that puzzle us
- Differences in browsers (Safari, Firefox) |
- More professional styling and features |
---?color=#c7f9d2

### TacoBoutAustin
---?color=#c7f9d2

## Did well
- Taco theme
  - Ratings
  - Loading
  - Logo
- Visually pleasing
- Seperate tabs for searching different models
- Concept
- Filtering
---?color=#c7f9d2

## Could do better
- "Rating of at least"
- Unclear what the user is filtering by
- Inconsistent font sizing across site
---?color=#c7f9d2

## Learned
Grid Cards
PUT IMAGES
---?color=#c7f9d2
## Puzzles us
- Not using fetch to hit API
- XML fetches
---?color=#c7f9d2
## Visualization
---?color=#c7f9d2
## Template Features

- Code Presenting |
- Repo Source, Static Blocks, GIST |
- Custom CSS Styling |
- Slideshow Background Images |
- Background Image Scaling |
- Custom Logo, TOC, and Footnotes |

---?code=sample/go/server.go&lang=golang&title=Golang File

@[1,3-6](Present code found within any repo source file.)
@[8-18](Without ever leaving your slideshow.)
@[19-28](Using GitPitch code-presenting with (optional) annotations.)

---?color=#96d9a4

@title[JavaScript Block]

<p><span class="slide-title">JavaScript Block</span></p>

```javascript
// Include http module.
var http = require("http");

// Create the server. Function passed as parameter
// is called on every request made.
http.createServer(function (request, response) {
  // Attach listener on end event.  This event is
  // called when client sent, awaiting response.
  request.on("end", function () {
    // Write headers to the response.
    // HTTP 200 status, Content-Type text/plain.
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    // Send data and end response.
    response.end('Hello HTTP!');
  });

// Listen on the 8080 port.
}).listen(8080);
```

@[1,2](You can present code inlined within your slide markdown too.)
@[9-17](Displayed using code-syntax highlighting just like your IDE.)
@[19-20](Again, all of this without ever leaving your slideshow.)

---?gist=onetapbeyond/494e0fecaf0d6a2aa2acadfb8eb9d6e8&lang=scala&title=Scala GIST

@[23](You can even present code found within any GitHub GIST.)
@[41-53](GIST source code is beautifully rendered on any slide.)
@[57-62](And code-presenting works seamlessly for GIST too, both online and offline.)

---?image=assets/image/snowscape.jpg&size=auto 80%&color=#96d9a4

<!-- Sample slide background image scaling and custom color fill -->

---?color=#96d9a4

## Template Help

- [Code Presenting](https://github.com/gitpitch/gitpitch/wiki/Code-Presenting)
  + [Repo Source](https://github.com/gitpitch/gitpitch/wiki/Code-Delimiter-Slides), [Static Blocks](https://github.com/gitpitch/gitpitch/wiki/Code-Slides), [GIST](https://github.com/gitpitch/gitpitch/wiki/GIST-Slides)
- [Custom CSS Styling](https://github.com/gitpitch/gitpitch/wiki/Slideshow-Custom-CSS)
- [Slideshow Background Images](https://github.com/gitpitch/gitpitch/wiki/Background-Setting)
- [Background Image Scaling](https://github.com/gitpitch/gitpitch/wiki/Image-Slides#scaling)
- [Custom Logo](https://github.com/gitpitch/gitpitch/wiki/Logo-Setting), [TOC](https://github.com/gitpitch/gitpitch/wiki/Table-of-Contents), and [Footnotes](https://github.com/gitpitch/gitpitch/wiki/Footnote-Setting)

---?color=#96d9a4

## GitPitch Pro Features

<br>
<div class="left">
    <i class="fa fa-user-secret fa-5x" aria-hidden="true"> </i><br>
    <a href="https://gitpitch.com/pro-features" class="pro-link">
    More details here.</a>
</div>
<div class="right">
    <ul>
        <li>Private Repos</li>
        <li>Private URLs</li>
        <li>Password-Protection</li>
        <li>Image Opacity</li>
        <li>SVG Image Support</li>
    </ul>
</div>

---?color=#96d9a4

### Questions?

<br>

@fa[twitter gp-contact](@gitpitch)

@fa[github gp-contact](gitpitch)

@fa[medium gp-contact](@gitpitch)

---?image=assets/image/gitpitch-audience.jpg

@title[Download this Template!]

### <span class="white">Get your presentation started!</span>
### [Download this template @fa[external-link gp-download]](https://gitpitch.com/template/download/envelope)
