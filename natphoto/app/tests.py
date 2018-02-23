from unittest import main, TestCase
from main import add

class Tests(TestCase):
    
    def test_add(self):
        v = add(2, 3)
        self.assertEqual(v, 5)

if __name__ == "__main__":
    main()
