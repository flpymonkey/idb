# Camera {#camera}

## Requests 

The following requests can be made 

**GET** `/cameras`
* Returns a list of all cameras stored in our database
* Additional Parameters:
  * park - The name of a national park to filter the list with
* Return Content-Type: application/json

**GET** `/cameras/<camera_name>`
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


# National Park {#park}

* **GET **/parks
  * Returns a list of all parks stored in our database
  * Parameters: None
  * Return Content-Type: application/json
    * A list of parks represented by a pairings of park names and parkIDs
* **GET **/park/parkID
  * Returns information about a specific park
  * Parameters: parkID - Int - The ID of a park
  * Content-Type: application/json
    * Park name - String - The name of the national park \(ex. "Yellowstone"\)
    * Location - String - The address of the national park \(ex. "Yellowstone National Park, Wyoming, United States"\)
    * Website url - String - The url of the national park's webpage on nps.gov 
      \(ex. [https://www.nps.gov/yell](https://www.nps.gov/yell\)\)
    * Hours - String - The operating hours of the park \(ex. "Open 24 hours a day"\)
    * Weather - String - The general weather conditions of the national park
      according to nps.gov \(ex. "Yosemite National Park covers nearly 1,200
      square miles \(3,100 square km\) in the Sierra Nevada, with elevations
      ranging from about 2,000 feet \(600 m\) to 13,000 ft \(4,000 m\).
      Yosemite receives 95% of its precipitation between October and May \(and
      over 75% between November and March\). Most of Yosemite is blanketed in
      snow from about November through May. \(Yosemite Valley can be rainy or
      snowy in any given winter storm."\)

# Photograph {#photo}

* **GET **/photos

  * Returns a list of all photos stored in our database

  * Parameters: None

  * Return Content-Type: application/json

    * A list of photographs represented by a pairings of photograph names and photoIDs

* **GET **/photo/photoID

  * Returns information about a specific photograph
  * Parameters: photoID - Int - The ID of the photo

  * Content-Type: application/json

    * photographer - String - The name of the photographer \(ex. "Stan Wong"\)
    * likes - Int - The number of likes on the image \(ex. 36\)
    * title - String - The title of the web page \(ex. "Yellowston Bison Boy"\)
    * date  - Datetime - The date and time the phototgraph was taken \(ex. YYYYMMDDHHMMSS\)
    * national park - Int - The parkID of the national park this photograph was taken in \(ex. 3\)
    * camera used - Int - The cameraID of what camera was used to take this photograph \(ex. 12\)



