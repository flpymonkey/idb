# Models

Below are the models for cameras, national parks, and photos.

## Camera {#camera}

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

## National Park {#park}

| Field           | Description                       | Example               |
|-----------------|-----------------------------------|-----------------------|
| `name` | The name of the park | "Yellowstone National Park" |
| `states` | The U.S. states where the park is located | "ID,MT,WY" |
| `latlong` | The latitude and longitude location of the park | "lat:44.59824417, long:-110.5471695" |
| `description` | A description of the park | "Visit Yellowstone and experience the world's first national park. Marvel at a volcano..." |
| `directions` | A description of directions to the park | "Yellowstone National Park covers nearly 3,500 square miles..." |
| `url` | A link to the nps.gov website for the park | "https://www.nps.gov/yell/index.htm" |
| `weather` | A description of the weather at the park | "Yellowstone's weather can vary quite a bit, even in a single day. In the summer..." |
| `directions_url` | A link to directions to the park | "http://www.nps.gov/yell/planyourvisit/directions.htm" |
| `image_url` | A link to an image of the park provided by nps.gov | "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg" |

## Photo {#photo}
	* Photographer
	* Number of likes
	* Title
	* Date taken
	* Park taken at
	* Camera
	* National Park

## UML Diagram {#uml}

A UML diagram showing the relationship between these models can be seen below:


