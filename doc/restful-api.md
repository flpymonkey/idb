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

