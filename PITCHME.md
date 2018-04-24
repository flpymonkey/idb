@title[Introduction]
# Natphoto

### SWEet Tea

---?color=#96d9a4


## Introduction



<br>
<div class="left">
    <div>Backend</div>
    <li>Jeff Bell</li>
    <li>Ben Johnson</li>
</div>
<div class="right">
    <div>Frontend</div>
    <ul>
        <li>Bri Vargas</li>
        <li>Tony DeNapoli</li>
        <li>Dayanny Caballero</li>
    </ul>
</div>

---

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

---

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

---

## Template Help

- [Code Presenting](https://github.com/gitpitch/gitpitch/wiki/Code-Presenting)
  + [Repo Source](https://github.com/gitpitch/gitpitch/wiki/Code-Delimiter-Slides), [Static Blocks](https://github.com/gitpitch/gitpitch/wiki/Code-Slides), [GIST](https://github.com/gitpitch/gitpitch/wiki/GIST-Slides)
- [Custom CSS Styling](https://github.com/gitpitch/gitpitch/wiki/Slideshow-Custom-CSS)
- [Slideshow Background Images](https://github.com/gitpitch/gitpitch/wiki/Background-Setting)
- [Background Image Scaling](https://github.com/gitpitch/gitpitch/wiki/Image-Slides#scaling)
- [Custom Logo](https://github.com/gitpitch/gitpitch/wiki/Logo-Setting), [TOC](https://github.com/gitpitch/gitpitch/wiki/Table-of-Contents), and [Footnotes](https://github.com/gitpitch/gitpitch/wiki/Footnote-Setting)

---

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

---

### Natphoto.me API

---

# Camera {#camera}

The following information shows how to retrieve data on a camera using
the natphoto.me API.

## Requests

The following requests can be made

**GET** `/cameras`
* Returns a list of all cameras
* Additional Parameters:
  * park - The name of a national park used to filter the list
* Return Content-Type: application/json

**GET** `/cameras/<camera_name>`
* Returns information about a specific camera
* camera_name - The name of the camera for which to get details
* Additional Parameters:
  * none
* Return Content-Type: application/json

---

## Usage Examples

Get a list of all cameras

```
http://api.natphoto.me/cameras
```

Get a list of all cameras that are used at a particular park

```
http://api.natphoto.me/cameras?park=Yellowstone%20National%20Park
```

Get the details for a specific camera

```
http://api.natphoto.me/cameras/Canon%20EOS%2080D
```

---

# National Park {#park}

The following information shows how to retrieve data on a national park using
the natphoto.me API.

## Requests

The following requests can be made

**GET** `/parks`
* Returns a list of all parks
* Additional Parameters:
  * camera - The name of a camera used to filter the list
* Return Content-Type: application/json

**GET** `/park/park_name`
* Returns information about a specific park
* park_name - The name of the park for which to get details
* Additional Parameters:
  * none
* Return Content-Type: application/json

---

## Usage Examples

Get a list of all parks

```
http://api.natphoto.me/parks
```

Get a list of all parks that are shot by a particular camera

```
http://api.natphoto.me/parks?camera=Canon%20EOS%2080D
```

Get the details for a specific park

```
http://api.natphoto.me/parks/Yellowstone%20National%20Park
```

---

# Photo {#photo}

The following information shows how to retrieve data on a photo using
the natphoto.me API.

## Requests

The following requests can be made

**GET** `/photos`
* Returns a list of all photos
* Additional Parameters:
  * camera - The name of a camera used to filter the list
  * park - The name of a park used to filter the list
* Return Content-Type: application/json

**GET** `/photo/photo_id`
* Returns information about a specific photo
* photo_id - The ID number of the photo for which to get details
* Additional Parameters:
  * none
* Content-Type: application/json

---

## Usage Examples

Get a list of all photos

```
http://api.natphoto.me/photos
```

Get a list of all photos that are shot by a particular camera

```
http://api.natphoto.me/photos?camera=Canon%20EOS%2080D
```

Get a list of all photos of a particular park

```
http://api.natphoto.me/photos?park=Yellowstone%20National%20Park
```

Get the details for a specific photo

```
http://api.natphoto.me/photos/123
```

---

# All {#all}

The following information shows how to retrieve data from the `api.natphoto.me/all`
endpoint in our API.

## Request

The following request can be made

**GET** `/all`
* Returns a list of all model instances in our database (all photos, cameras, and
  parks)
* Additional Parameters:
  * None
* Return Content-Type: application/json

---

## Usage Examples

Get a list of all model instances in our database

```
http://api.natphoto.me/all
```
---

### Questions?

<br>

@fa[twitter gp-contact](@gitpitch)

@fa[github gp-contact](gitpitch)

@fa[medium gp-contact](@gitpitch)

---?image=assets/image/gitpitch-audience.jpg

@title[Download this Template!]

### <span class="white">Get your presentation started!</span>
### [Download this template @fa[external-link gp-download]](https://gitpitch.com/template/download/envelope)
