# National Park

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
    * Hours - String - The operating hours of the park \(ex. "Open 24 hours a day"\)
    * Weather - String - The general weather conditions of the national park
      according to nps.gov \(ex. "Yosemite National Park covers nearly 1,200
      square miles \(3,100 square km\) in the Sierra Nevada, with elevations
      ranging from about 2,000 feet \(600 m\) to 13,000 ft \(4,000 m\).
      Yosemite receives 95% of its precipitation between October and May \(and
      over 75% between November and March\). Most of Yosemite is blanketed in
      snow from about November through May. \(Yosemite Valley can be rainy or
      snowy in any given winter storm."\)



