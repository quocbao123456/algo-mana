import unittest
from merge_sort import merge_sort, merge_sort_1, merge_1

class TestMergeSort(unittest.TestCase):
    # def test_sort_empty_arr(self):
    #     arr = []
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [])
        
    # def test_merge_already_sorted(self):
    #     arr = [1,2,3]
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [1, 2, 3])
        
    # def test_merge_one_element(self):
    #     arr = [3]
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [3])
        
    # def test_merge_even_len(self):
    #     arr = [3, 2, 1, 5, 4, 8]
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [1, 2, 3, 4, 5, 8])
        
    # def test_merge_even_odd(self):
    #     arr = [3, 2, 1, 5, 4]
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [1, 2, 3, 4, 5])
        
    # def test_merge_sort_descending_order(self):
    #     arr = [5, 4, 3, 2, 1]
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [1, 2, 3, 4, 5])
    
    
    # def test_merge_sort_duplicate(self):
    #     arr = [5,9,7,2,2,6,7,8]
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [2, 2, 5, 6, 7, 7, 8, 9])
        
    # def test_merge_sort_duplicate_boundary(self):
    #     arr = [5,9,7,2,2,6,7,8,8,8]
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [2, 2, 5, 6, 7, 7, 8, 8, 8, 9])
        
    # def test_merge_sort_random(self):
    #     arr = [5,9,7,2,6,7,8]
    #     sorted_arr = merge_sort(arr)
        
    #     self.assertEqual(sorted_arr, [2, 5, 6, 7, 7, 8, 9])
    
    
    # In place sort O(1)
    def test_merge_sort_descending_order_1(self):
        arr = [5, 4, 3, 2, 1]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [1, 2, 3, 4, 5])
        
    def test_sort_empty_arr_1(self):
        arr = []
        merge_sort_1(arr)
        
        self.assertEqual(arr, [])
        
    def test_merge_already_sorted_1(self):
        arr = [1,2,3]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [1, 2, 3])
        
    def test_merge_one_element_1(self):
        arr = [3]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [3])
        
    def test_merge_even_len_1(self):
        arr = [3, 2, 1, 5, 4, 8]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [1, 2, 3, 4, 5, 8])
        
    def test_merge_even_odd_1(self):
        arr = [3, 2, 1, 5, 4]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [1, 2, 3, 4, 5])
        
    def test_merge_sort_descending_order_1(self):
        arr = [5, 4, 3, 2, 1]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [1, 2, 3, 4, 5])
    
    
    def test_merge_sort_duplicate_1(self):
        arr = [5,9,7,2,2,6,7,8]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [2, 2, 5, 6, 7, 7, 8, 9])
        
    def test_merge_sort_duplicate_boundary_1(self):
        arr = [5,9,7,2,2,6,7,8,8,8]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [2, 2, 5, 6, 7, 7, 8, 8, 8, 9])
        
    def test_merge_sort_random_1(self):
        arr = [5,9,7,2,6,7,8]
        merge_sort_1(arr)
        
        self.assertEqual(arr, [2, 5, 6, 7, 7, 8, 9])
if __name__ == '__main__':
    unittest.main()