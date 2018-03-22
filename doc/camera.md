# Camera

## Requests 

The following requests can be made 

**GET** /cameras
* Returns a list of all cameras stored in our database
* Additional Parameters:
  * park - The name of a national park to filter the list with
* Return Content-Type: application/json

**GET** /cameras/\<camera_name\>
* Returns information about a specific camera
* camera_name - int - The camera 
* Additional Parameters:
  * none
* Return Content-Type: application/json

## Response Model

| Field           | Description                       | Example               |
|-----------------|-----------------------------------|-----------------------|
| `name` | The name of the camera | "Canon EOS 80D" |
| `price` | The price of the camera | "1099.99" |
| `weight` | The weight of the camera | "25.8 pounds" |
| `type` | The type of the camera| "DSLR Camera Body Only" |
| `water_resistant` | If the camera is water resistant | "No" |
| `total_megapixels` | The total megapixels of the camera | "24.2 megapixels" |
| `effective_megapixels` | The effective megapixels of the camera | "24.2 megapixels" | 
| `iso` | The iso settings for the camera | "100-16,000 (expandable to 25,600)" |
| `shutter_speeds` | The shutter speeds available for the camera | "1/8000 sec to 30 sec" |
| `video_resolution` | The video resolution for the camera (if available) | "1920 x 1080" |
| `image_resoultion` | The image resolution for the camera | "6000 x 4000" |
| `sensor` | The sensor for the camera | "CMOS" |
| `image_url` | A link to an image of the camera | "http://via.placeholder.com/350x150" |

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

