import unittest
from binary_search import * 

class TestBinarySearchUniqueArray(unittest.TestCase):
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17]

    def test_inner_element(self):
        self.assertEqual(binary_search(self.arr, 10), 9)
        self.assertEqual(binary_search_leftmost(self.arr, 10), 9)
        self.assertEqual(binary_search_rightmost(self.arr, 10), 9)
        
    def test_first_element(self):
        self.assertEqual(binary_search(self.arr, 1), 0)
        self.assertEqual(binary_search_leftmost(self.arr, 1), 0)
        self.assertEqual(binary_search_rightmost(self.arr, 1), 0)
    
    def test_last_element(self):
        self.assertEqual(binary_search(self.arr, 17), 11)
        self.assertEqual(binary_search_leftmost(self.arr, 17), 11)
        self.assertEqual(binary_search_rightmost(self.arr, 17), 11)
        
    def test_out_range_right(self):
        self.assertEqual(binary_search(self.arr, 20), -1)
        self.assertEqual(binary_search_leftmost(self.arr, 20), -1)
        self.assertEqual(binary_search_rightmost(self.arr, 20), -1)
        
    def test_out_range_left(self):
        self.assertEqual(binary_search(self.arr, 0), -1)
        self.assertEqual(binary_search_leftmost(self.arr, 0), -1)
        self.assertEqual(binary_search_rightmost(self.arr, 0), -1)
    
    def test_not_existed_inner(self):
        self.assertEqual(binary_search(self.arr, 13), -1)
        self.assertEqual(binary_search_leftmost(self.arr, 13), -1)
        self.assertEqual(binary_search_rightmost(self.arr, 13), -1)
        
        
class TestBinarySearchDuplicateArray(unittest.TestCase):
    arr = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 17, 17]

    def test_inner_element(self):
        self.assertEqual(self.arr[binary_search(self.arr, 10)], 10)
        self.assertEqual(binary_search_leftmost(self.arr, 10), 11)
        self.assertEqual(binary_search_rightmost(self.arr, 10), 15)
        
    def test_first_element(self):
        self.assertEqual(self.arr[binary_search(self.arr, 1)], 1)
        self.assertEqual(binary_search_leftmost(self.arr, 1), 0)
        self.assertEqual(binary_search_rightmost(self.arr, 1), 2)
    
    def test_last_element(self):
        self.assertEqual(self.arr[binary_search(self.arr, 17)], 17)
        self.assertEqual(binary_search_leftmost(self.arr, 17), 16)
        self.assertEqual(binary_search_rightmost(self.arr, 17), 17)
        
    def test_out_range_right(self):
        self.assertEqual(binary_search(self.arr, 20), -1)
        self.assertEqual(binary_search_leftmost(self.arr, 20), -1)
        self.assertEqual(binary_search_rightmost(self.arr, 20), -1)
        
    def test_out_range_left(self):
        self.assertEqual(binary_search(self.arr, 0), -1)
        self.assertEqual(binary_search_leftmost(self.arr, 0), -1)
        self.assertEqual(binary_search_rightmost(self.arr, 0), -1)
    
    def test_not_existed_inner(self):
        self.assertEqual(binary_search(self.arr, 13), -1)
        self.assertEqual(binary_search_leftmost(self.arr, 13), -1)
        self.assertEqual(binary_search_rightmost(self.arr, 13), -1)

    
if __name__ == '__main__':
    unittest.main()