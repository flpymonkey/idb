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
    * Camera brand - String - The name of the camera brand \(ex. "Canon"\)
    * Camera model - String - The name of the camera model \(ex. "EOS 5D Mark 
      IV"\)
    * Max Resolution Width - Int - The width of the max resolution measured in 
      pixels \(ex. 6720\)
    * Max Resolution Height - Int - The height of the max resolution measured 
      in pixels \(ex. 4480\)
    * Effective Pixels - Int - The max number of megapixels this camera uses 
      \(ex. 30\)
    * Continuous drive speed - Int - The max speed of continuous drive measured
      in frames per second \(ex. 7\)
    * Video enabled - Boolean - A boolean depicting if the camera has video 
      capabilities \(ex. True\)



