from unittest import main, TestCase
from main import add, app

import json

class Tests(TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_add(self):
        v = add(2, 3)
        self.assertEqual(v, 5)

    def test_site_cameras(self):
        r = self.app.get('/cameras')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 83)
        self.assertEqual(r.status_code, 200)

    def test_site_cameras_by_park(self):
        r = self.app.get('/cameras?park=Big Bend National Park')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 12)
        self.assertEqual(r.status_code, 200)

    def test_site_individual_camera(self):
        r = self.app.get('/cameras/Canon EOS 80D')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 1)
        self.assertEqual(r.status_code, 200)

    def test_site_parks(self):
        r = self.app.get('/parks')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 49)
        self.assertEqual(r.status_code, 200)

    def test_site_parks_by_camera(self):
        r = self.app.get('/parks?camera=Canon EOS 80D')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 3)
        self.assertEqual(r.status_code, 200)

    def test_site_individual_park(self):
        r = self.app.get('/parks/Yellowstone National Park')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 1)
        self.assertEqual(r.status_code, 200)

    def test_site_photos(self):
        r = self.app.get('/photos')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 708)
        self.assertEqual(r.status_code, 200)

    def test_site_photos_by_park(self):
        r = self.app.get('/photos?park=Yellowstone National Park')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 20)
        self.assertEqual(r.status_code, 200)

    def test_site_photos_by_camera(self):
        r = self.app.get('/photos?camera=Canon EOS 5D Mark II')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 19)
        self.assertEqual(r.status_code, 200)

    def test_site_photos_by_camera_no_data(self):
        r = self.app.get('/photos?camera=Canon EOS 5D Mark 1000')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 0)
        self.assertEqual(r.status_code, 200)

    def test_site_photos_by_camera_park_no_data(self):
        r = self.app.get('/photos?camera=Canon EOS 5D Mark 1000&park=Blob World')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 0)
        self.assertEqual(r.status_code, 200)

    def test_site_photos_by_camera_park(self):
        r = self.app.get('/photos?camera=Canon EOS 5D Mark II&park=Yellowstone National Park')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 3)
        self.assertEqual(r.status_code, 200)

    def test_site_individual_photo(self):
        r = self.app.get('/photos/14')
        _json_r = json.loads(r.data)
        self.assertEqual(len(_json_r), 1)
        self.assertEqual(r.status_code, 200)

    def test_site_about(self):
        r = self.app.get('/about')
        self.assertEqual(r.status_code, 200)

    def test_site_nonexistant(self):
        r = self.app.get('/nonexistant')
        self.assertEqual(r.status_code, 404)

if __name__ == "__main__":
    main()
