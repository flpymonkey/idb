# Camera

* **GET **/cameras
  * Returns a list of all cameras stored in our database
  * Parameters: None
  * Return Content-Type: application/json
    * A list of cameras represented by a pairings of camera names and cameraIDs
* **GET **/camera/cameraID
  * Returns information about a specific camera
  * Parameters: cameraID - Int - The ID of a camera
  * Return Content-Type: application/json
    * brand - text - The name of the camera brand \(ex. "Canon"\)
    * model - text - The name of the camera model \(ex. "EOS 5D Mark 
      IV"\)
    * max_resolution_width - integer - The width of the max resolution measured in 
      pixels \(ex. 6720\)
    * max_resolution_height - integer - The height of the max resolution measured 
      in pixels \(ex. 4480\)
    * megapixels - real - The max number of megapixels this camera uses 
      \(ex. 28.4\)
    * continuous_drive_speed - real - The max speed of continuous drive measured
      in frames per second \(ex. 7.2\)
    * video_enabled - boolean - A boolean depicting if the camera has video 
      capabilities \(ex. True\)



