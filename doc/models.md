# Models

Below are the models for cameras, national parks, and photos.

## Camera {#camera}

| Field | Description | Example |
| --- | --- | --- |
| `name` | The name of the camera | "Canon EOS 80D" |
| `price` | The price of the camera | "1099.99" |
| `weight` | The weight of the camera | "25.8 pounds" |
| `type` | The type of the camera | "DSLR Camera Body Only" |
| `water_resistant` | If the camera is water resistant | "No" |
| `total_megapixels` | The total megapixels of the camera | "24.2 megapixels" |
| `effective_megapixels` | The effective megapixels of the camera | "24.2 megapixels" |
| `iso` | The iso settings for the camera | "100-16,000 \(expandable to 25,600\)" |
| `shutter_speeds` | The shutter speeds available for the camera | "1/8000 sec to 30 sec" |
| `video_resolution` | The video resolution for the camera \(if available\) | "1920 x 1080" |
| `image_resoultion` | The image resolution for the camera | "6000 x 4000" |
| `sensor` | The sensor for the camera | "CMOS" |
| `image_url` | A link to an image of the camera | "[http://via.placeholder.com/350x150](http://via.placeholder.com/350x150)" |

## National Park {#park}

| Field | Description | Example |
| --- | --- | --- |
| `name` | The name of the park | "Yellowstone National Park" |
| `states` | The U.S. states where the park is located | "ID,MT,WY" |
| `latlong` | The latitude and longitude location of the park | "lat:44.59824417, long:-110.5471695" |
| `description` | A description of the park | "Visit Yellowstone and experience the world's first national park. Marvel at a volcano..." |
| `directions` | A description of directions to the park | "Yellowstone National Park covers nearly 3,500 square miles..." |
| `url` | A link to the nps.gov website for the park | "[https://www.nps.gov/yell/index.htm](https://www.nps.gov/yell/index.htm)" |
| `weather` | A description of the weather at the park | "Yellowstone's weather can vary quite a bit, even in a single day. In the summer..." |
| `directions_url` | A link to directions to the park | "[http://www.nps.gov/yell/planyourvisit/directions.htm](http://www.nps.gov/yell/planyourvisit/directions.htm)" |
| `image_url` | A link to an image of the park provided by nps.gov | "[https://www.nps.gov/common/uploads/structured\_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg](https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg)" |

## Photo {#photo}

| Field | Description | Example |
| --- | --- | --- |
| `id` | The id of the photo | 1 |
| `photographer` | The photographer of the photo | "Dan Giveon" |
| `title` | The title of the photo | "Buffalo in South Dakota" |
| `park` | The `name` of the park where the photo was taken | "Badlands National Park" |
| `camera` | The `name` of the camera that took the photo | "Canon PowerShot SX710 HS" |
| `date` | The date the photo was taken | "2017-08-26 04:07:05" |
| `likes` | The number of favorites on Flickr for that photo | "0" |
| `flickr_url` | A link to the photo on Flickr | "[https://www.flickr.com/photos/dangiveon/38977153140/](https://www.flickr.com/photos/dangiveon/38977153140/)" |
| `image_url` | A link to the actual image file | "[https://c1.staticflickr.com/5/4776/38977153140\_f7e605e884\_h.jpg](https://c1.staticflickr.com/5/4776/38977153140_f7e605e884_h.jpg)" |
| `description` | A description of the photo | "Badlands National Park" |

## UML Diagram {#uml}

A UML diagram showing the relationship between these models can be seen below:

![](assets/uml_diagram.png)

**Note:** From the models themselves, there is no direct connection between the
`park` and `camera` models. In the database, parks and cameras are connected
only by the two one to many relationships they have with `photos`. This
relationship normalizes out what would be a man-to-many relationship between
`park`s and `camera`s, eliminating redundant data within the tables. There is
an *implicit* connection between parks and cameras through the use of filtering
with the API.

For example, if I wanted to get all of the parks that a specific camera has
taken photos of, I should make the following request:

```
http://api.natphoto.me/parks?camera=Canon%20EOS%2080D
```

This request will get all of the parks that are related to the provided camera. 
Likewise, it is possible get all of the cameras with a specified park, even
though this is not specifically linked in the database.

