import unittest
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

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
        driver.get("http://localhost:3000")
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
        driver.get("http://localhost:3000")
        driver.find_element_by_id("navAbout").click()
        assert self.elementExists("class name", "aboutDesc")



    def tearDown(self):
        self.driver.close()



if __name__ == "__main__":
    unittest.main()
