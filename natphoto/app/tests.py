from unittest import main, TestCase
from main import app

import json

class Tests(TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_cameras(self):
        r = self.app.get('/cameras')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 83)
        self.assertEqual(r.status_code, 200)

    def test_cameras_by_park(self):
        r = self.app.get('/cameras?park=Big Bend National Park')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 12)
        self.assertEqual(r.status_code, 200)

    def test_individual_camera(self):
        r = self.app.get('/cameras/Canon EOS 80D')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 1)
        self.assertEqual(r.status_code, 200)

    def test_individual_camera_fail(self):
        r = self.app.get('/cameras/abc')
        _json_r = json.loads(r.data)
        self.assertEqual(r.status_code, 404)

    def test_parks(self):
        r = self.app.get('/parks')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 49)
        self.assertEqual(r.status_code, 200)

    def test_parks_by_camera(self):
        r = self.app.get('/parks?camera=Canon EOS 80D')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 3)
        self.assertEqual(r.status_code, 200)

    def test_individual_park(self):
        r = self.app.get('/parks/Yellowstone National Park')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 1)
        self.assertEqual(r.status_code, 200)

    def test_individual_park_fail(self):
        r = self.app.get('/parks/abc')
        _json_r = json.loads(r.data)
        self.assertEqual(r.status_code, 404)

    def test_photos(self):
        r = self.app.get('/photos')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 708)
        self.assertEqual(r.status_code, 200)

    def test_photos_by_park(self):
        r = self.app.get('/photos?park=Yellowstone National Park')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 20)
        self.assertEqual(r.status_code, 200)

    def test_photos_by_camera(self):
        r = self.app.get('/photos?camera=Canon EOS 5D Mark II')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 19)
        self.assertEqual(r.status_code, 200)

    def test_photos_by_camera_no_data(self):
        r = self.app.get('/photos?camera=Canon EOS 5D Mark 1000')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 0)
        self.assertEqual(r.status_code, 200)

    def test_photos_by_camera_park_no_data(self):
        r = self.app.get('/photos?camera=Canon EOS 5D Mark 1000&park=Blob World')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 0)
        self.assertEqual(r.status_code, 200)

    def test_photos_by_camera_park(self):
        r = self.app.get('/photos?camera=Canon EOS 5D Mark II&park=Yellowstone National Park')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 3)
        self.assertEqual(r.status_code, 200)

    def test_all(self):
        r = self.app.get('/all')
        _json_r = json.loads(r.data)
        # This number might change as we update the database contents
        self.assertEqual(len(_json_r), 840) 
        self.assertEqual(r.status_code, 200)

    def test_individual_photo(self):
        r = self.app.get('/photos/14')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 1)
        self.assertEqual(r.status_code, 200)

    def test_individual_photo_fail(self):
        r = self.app.get('/photos/abc')
        _json_r = json.loads(r.data)
        self.assertEqual(r.status_code, 404)

    # This test is commented because if requests to GitHub exceed some small
    # amount within an hour, it will not respond and this test will fail.
    #def test_about(self):
    #    r = self.app.get('/about')
    #    self.assertEqual(r.status_code, 200)

    def test_nonexistant(self):
        r = self.app.get('/nonexistant')
        self.assertEqual(r.status_code, 404)

if __name__ == "__main__":
    main()
