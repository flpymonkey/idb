# Photograph

* **GET **/photos
  * Returns a list of all photos stored in our database
  * Parameters: None
  * Return Content-Type: application/json
    * A list of photographs represented by a pairings of photograph names and 
      photoIDs

* **GET **/photo/photoID
  * Returns information about a specific photograph
  * Parameters: photoID - Int - The ID of the photo
  * Content-Type: application/json
    * photographer - String - The name of the photographer \(ex. "Stan Wong"\)
    * likes - Int - The number of likes on the image \(ex. 36\)
    * title - String - The title of the web page \(ex. "Yellowston Bison Boy"\)
    * date  - Datetime - The date and time the phototgraph was taken 
      \(ex. YYYYMMDDHHMMSS\)
    * national park - Int - The parkID of the national park this photograph was 
      taken in \(ex. 3\)
    * camera used - Int - The cameraID of what camera was used to take this 
      photograph \(ex. 12\)
