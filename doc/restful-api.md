# Camera

* **GET **/cameras
  * Returns a list of all cameras stored in our database
* * Parameters: None
* * Return Content-Type: application/json
    * A list of cameras represented by a pairings of camera names and cameraIDs
* **GET **/camera/cameraID
  * Returns information about a specific camera
  * Parameters: cameraID - Int - The ID of a camera
  * Return Content-Type: application/json
    * Camera brand - String - The name of the camera brand \(ex. "Canon"\)
    * Camera model - String - The name of the camera model \(ex. "EOS 5D Mark IV"\)
    * Max Resolution Width - Int - The width of the max resolution measured in pixels \(ex. 6720\)
    * Max Resolution Height - Int - The height of the max resolution measured in pixels \(ex. 4480\)
    * Effective Pixels - Int - The max number of megapixels this camera uses \(ex. 30\)
    * Continuous drive speed - Int - The max speed of continuous drive measured in frames per second \(ex. 7\)
    * Video enabled - Boolean - A boolean depicting if the camera has video capabilities \(ex. True\)

# National Park

* **GET **/parks
  * Returns a list of all parks stored in our database
  * Parameters: None
  * Return Content-Type: application/json
    * A list of parks represented by a pairings of park names and parkIDs
* **GET **/park/parkID
  * Returns information about a specific camera
  * Parameters: cameraID - Int - The ID of a camera
  * Content-Type: application/json
    * Park name - String - The name of the national park \(ex. "Yellowstone"\)
    * Location - String - The address of the national park \(ex. "Yellowstone National Park, Wyoming, United States"\)
    * Website url - String - The url of the national park's webpage on nps.gov \(ex. "https://www.nps.gov/yell"\)
    * Hours - String - The operating hours of the park \(ex. "Open 24 hours a day"\)
    * Weather - String - The general weather conditions of the national park according to nps.gov \(ex. "Yosemite National Park covers nearly 1,200 square miles \(3,100 square km\) in the Sierra Nevada, with elevations ranging from about 2,000 feet \(600 m\) to 13,000 ft \(4,000 m\). Yosemite receives 95% of its precipitation between October and May \(and over 75% between November and March\). Most of Yosemite is blanketed in snow from about November through May. \(Yosemite Valley can be rainy or snowy in any given winter storm."\)

# Photograph

* **GET **/photos

  * Returns a list of all photos stored in our database

  * Parameters: None

  * Return Content-Type: application/json

    * A list of photographs represented by a pairings of photograph names and photoIDs

* **GET **/photo/photoID

  * Returns information about a specific photograph
  * Parameters: photoID - Int - The ID of the photo

* * Content-Type: application/json
    * photographer - String - The name of the photographer \(ex. "Stan Wong"\)
    * likes - Int - The number of likes on the image \(ex. 36\)
    * title - String - The title of the web page \(ex. "Yellowston Bison Boy"\)
    * date  - Datetime - The date and time the phototgraph was taken \(ex. YYYYMMDDHHMMSS\)
    * national park - Int - The parkID of the national park this photograph was taken in \(ex. 3\)
    * camera used - Int - The cameraID of what camera was used to take this photograph \(ex. 12\)



