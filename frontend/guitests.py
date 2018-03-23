import unittest
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome("./chromedriver")

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
        assert self.elementExists("id", "parkGrid")
        driver.find_element_by_id("navPhotos").click()
        assert self.elementExists("id", "photoGrid")
        driver.find_element_by_id("navCameras").click()
        assert self.elementExists("id", "cameraGrid")
        driver.find_element_by_id("navHome").click()
        assert self.elementExists("id", "logo")

    def test_parkgrid_photo(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navParks").click()
        assert self.elementExists("id", "parkGrid")
        time.sleep(10)
        assert self.elementExists("id", "/parks/Big Bend National Park")
        driver.find_element_by_id("/parks/Big Bend National Park").click()
        assert self.elementExists("class name", "parkHeader")

    def test_photogrid_photo(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navPhotos").click()
        assert self.elementExists("id", "photoGrid")
        time.sleep(10)
        assert self.elementExists("id", "/photos/1")
        driver.find_element_by_id("/photos/1").click()
        assert self.elementExists("class name", "headerRow")

    def test_cameragrid_photo(self) :
        driver = self.driver
        driver.get("http://natphoto.me")
        driver.find_element_by_id("navCameras").click()
        assert self.elementExists("id", "cameraGrid")
        time.sleep(15)
        assert self.elementExists("id", "/cameras/Nikon D610")
        driver.find_element_by_id("/cameras/Nikon D610").click()
        assert self.elementExists("class name", "cameraHeader")

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
        assert self.elementExists("id", "parkGrid")
        driver.find_element_by_id("navCameras").click()
        driver.back()
        assert self.elementExists("id", "parkGrid")
        driver.find_element_by_id("navCameras").click()
        assert self.elementExists("id", "cameraGrid")
        driver.find_element_by_id("navPhotos").click()
        driver.back()
        assert self.elementExists("id", "cameraGrid")
        driver.find_element_by_id("navPhotos").click()
        assert self.elementExists("id", "photoGrid")
        driver.back()
        assert self.elementExists("id", "cameraGrid")


    def tearDown(self):
        self.driver.close()



if __name__ == "__main__":
    unittest.main()
