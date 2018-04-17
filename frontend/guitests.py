import unittest
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
import time

driver = None

class PythonOrgSearch(unittest.TestCase):
    # @classmethod
    # def setUpClass(cls):
    #     global driver
    #     driver = webdriver.Chrome("./chromedriver")
    #     driver.implicitly_wait(15)

    def setUp(self):
        self.driver = webdriver.Chrome("./chromedriver")
        self.driver.implicitly_wait(20)

    def elementExists(self, byThis, val) :
        try:
            self.driver.find_element(by=byThis, value=val)
        except NoSuchElementException :
            return False
        return True

    def test_home(self):
        driver = self.driver
        driver.get("http://natphoto.me")
        self.assertIn("NatPhoto", driver.title)
        assert self.elementExists("id", "navAbout")
        assert self.elementExists("id", "navHome")
        assert self.elementExists("id", "navCameras")
        assert self.elementExists("id", "navParks")
        assert self.elementExists("id", "navPhotos")
        assert self.elementExists("id", "logo")
        assert self.elementExists("class name", "textWrapper")
        assert self.elementExists("class name", "material-icons")

    def test_navigation(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navParks").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Parks")
        driver.find_element_by_id("navPhotos").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Photos")
        driver.find_element_by_id("navCameras").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")
        driver.find_element_by_id("navHome").click()
        assert (driver.find_element_by_class_name("title").text == "NatPhoto")

    def test_parkgrid_photo(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navParks").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Parks")
        driver.find_element_by_id("/parks/Acadia National Park").click()
        assert (driver.find_element_by_class_name("parkHeader").text == "Acadia National Park")

    def test_photogrid_photo(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navPhotos").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Photos")
        driver.find_element_by_id("/photos/480").click()
        assert (driver.find_element_by_class_name("photoTitle").text == "#32380")

    def test_cameragrid_photo(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navCameras").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")
        driver.find_element_by_id("/cameras/Apple iPhone 6").click()
        assert (driver.find_element_by_class_name("cameraHeader").text == "Apple iPhone 6")

    def test_back(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        assert self.elementExists("class name", "material-icons")
        driver.find_element_by_id("navAbout").click()
        assert self.elementExists("class name", "aboutDesc")
        driver.back()
        assert self.elementExists("class name", "material-icons")
        driver.find_element_by_id("navAbout").click()
        assert self.elementExists("class name", "aboutDesc")
        driver.find_element_by_id("navParks").click()
        driver.back()
        assert self.elementExists("class name", "aboutDesc")
        driver.find_element_by_id("navParks").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Parks")
        driver.find_element_by_id("navCameras").click()
        driver.back()
        assert (driver.find_element_by_class_name("gridTitle").text == "Parks")
        driver.find_element_by_id("navCameras").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")
        driver.find_element_by_id("navPhotos").click()
        driver.back()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")
        driver.find_element_by_id("navPhotos").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Photos")
        driver.back()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")

    def test_photo_sort(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navPhotos").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Photos")
        driver.find_element_by_id("sortButton").click()
        driver.find_element_by_id("sort2").click()
        assert driver.find_element_by_id("/photos/645")

    def test_park_sort(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navParks").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Parks")
        driver.find_element_by_id("sortButton").click()
        driver.find_element_by_id("sort3").click()
        assert driver.find_element_by_id("/parks/Kenai Fjords National Park")
        driver.find_element_by_id("sortButton").click()
        driver.find_element_by_id("sort4").click()
        assert driver.find_element_by_id("/parks/Grand Teton National Park")

    def test_camera_sort(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navCameras").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")
        driver.find_element_by_id("sortButton").click()
        driver.find_element_by_id("sort5").click()
        assert driver.find_element_by_id("/cameras/samsung SM-G360H")
        driver.find_element_by_id("sortButton").click()
        driver.find_element_by_id("sort6").click()
        assert driver.find_element_by_id("/cameras/Canon EOS 5DS")

    def test_photo_filter(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navPhotos").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Photos")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[1]
        wantedButton.click()
        driver.find_element_by_id("filter11").click()
        assert driver.find_element_by_id("/photos/504")
        assert driver.find_element_by_id("/photos/632")
        assert driver.find_element_by_id("/photos/152")
        assert driver.find_element_by_id("/photos/596")

    def test_camera_filter(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navCameras").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[1]
        wantedButton.click()
        driver.find_element_by_id("filter5").click()
        assert driver.find_element_by_id("/cameras/Canon EOS-1D X")

    def test_park_filter(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navParks").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Parks")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[1]
        wantedButton.click()
        driver.find_element_by_id("filter3").click()
        assert driver.find_element_by_id("/parks/Channel Islands National Park")

    def test_photos_reset_button(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navPhotos").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Photos")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[1]
        wantedButton.click()
        driver.find_element_by_id("filter12").click()
        wantedButton = filterButtons[3]
        wantedButton.click()
        driver.find_element_by_id("reset1").click()
        assert driver.find_element_by_id("/photos/324")

    def test_parks_reset_button(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navParks").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Parks")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[1]
        wantedButton.click()
        driver.find_element_by_id("filter5").click()
        assert driver.find_element_by_id("/parks/Dry Tortugas National Park")
        wantedButton = filterButtons[3]
        wantedButton.click()
        driver.find_element_by_id("reset1").click()
        assert driver.find_element_by_id("/parks/Badlands National Park")

    def test_cameras_reset_button(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navCameras").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[2]
        wantedButton.click()
        driver.find_element_by_id("filter9").click()
        assert driver.find_element_by_id("/cameras/Canon EOS 5DS")
        wantedButton = filterButtons[3]
        wantedButton.click()
        driver.find_element_by_id("reset2").click()
        assert driver.find_element_by_id("/cameras/Apple iPhone 7 Plus")

    def test_photos_filter_sort(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navPhotos").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Photos")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[2]
        wantedButton.click()
        filterItems = driver.find_elements_by_class_name(("dropdown-item"))
        wantedItem = filterItems[28]
        wantedItem.click()
        cards = driver.find_elements_by_class_name(("card"))
        assert len(cards) == 7
        driver.find_element_by_id("sortButton").click()
        driver.find_element_by_id("sort6").click()
        wantedCard = cards[0]
        assert (wantedCard.get_attribute("id") == "/photos/486")
        wantedCard = cards[6]
        assert (wantedCard.get_attribute("id") == "/photos/567")

    def test_parks_filter_sort(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navParks").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Parks")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[2]
        wantedButton.click()
        filterItems = driver.find_elements_by_class_name(("dropdown-item"))
        wantedItem = filterItems[39]
        wantedItem.click()
        cards = driver.find_elements_by_class_name(("card"))
        assert len(cards) == 8
        driver.find_element_by_id("sortButton").click()
        driver.find_element_by_id("sort5").click()
        wantedCard = cards[0]
        assert (wantedCard.get_attribute("id") == "/parks/Mount Rainier National Park")
        wantedCard = cards[7]
        assert (wantedCard.get_attribute("id") == "/parks/Glacier National Park")

    def test_cameras_filter_sort(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navCameras").click()
        assert (driver.find_element_by_class_name("gridTitle").text == "Cameras")
        filterButtons = driver.find_elements_by_class_name(("dropdown-toggle"))
        wantedButton = filterButtons[2]
        wantedButton.click()
        filterItems = driver.find_elements_by_class_name(("dropdown-item"))
        wantedItem = filterItems[13]
        wantedItem.click()
        cards = driver.find_elements_by_class_name(("card"))
        assert len(cards) == 10
        driver.find_element_by_id("sortButton").click()
        driver.find_element_by_id("sort5").click()
        wantedCard = cards[0]
        assert (wantedCard.get_attribute("id") == "/cameras/Olympus TG-820")
        wantedCard = cards[9]
        assert (wantedCard.get_attribute("id") == "/cameras/samsung SM-G950U")

    def tearDown(self):
        self.driver.close()



if __name__ == "__main__":
    unittest.main()
