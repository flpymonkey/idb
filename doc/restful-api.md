# Camera

* **GET **/cameras
  * Returns all cameras stored in our database
* * Parameters: None
* * Return Content-Type: application/json
* **GET **/camera/cameraID
  * Returns information about a specific camera
  * Parameters: cameraID - Int - The ID of a camera
* * Return Content-Type: application/json
    * 

# National Park

* **GET **/parks
  * Content-Type: application/json
    * 
* **GET **/park/parkID
  * Content-Type: application/json
    * 

# Photograph

* **GET **/photos
  * Returns all cameras stored in our database
  * Parameters: None
  * Return Content-Type: application/json

* **GET **/photo/photoID
  * R    eturns information about a specific photograph
  * Parameters: photoID - Int - The ID of the photo
* * Content-Type: application/json
    * photographer - String - The name of the photographer
    * likes - Int - The number of likes on the image
    * title - String - The title of the web page
    * date  - Datetime - The date and time the phototgraph was taken
    * national park - Int - The parkID of the national park this photograph was taken in
    * camera used - Int - The cameraID of what camera was used to take this photograph



