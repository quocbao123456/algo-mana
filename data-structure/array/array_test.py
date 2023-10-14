import unittest
import array as arr

class TestInsertOperation(unittest.TestCase):
    # Append
    def test_append(self):
        nums = arr.array('i', [1, 2, 3, 4])
        nums.append(5)

        self.assertEqual(nums.tolist() , [1, 2, 3, 4, 5])
          
    def test_append_other_type(self):
        nums = arr.array('i', [1, 2, 3, 4])
        
        with self.assertRaises(TypeError):
            nums.append("dsd")

    # Insert
    def test_insert_inner(self):
        nums = arr.array('i', [1, 2, 3, 4])
        nums.insert(1, 3)
        
        self.assertEqual(nums.tolist(), [1, 3, 2, 3, 4])
        
    def test_insert_first(self):
        nums = arr.array('i', [1, 2, 3, 4])
        nums.insert(0, 3)
        
        self.assertEqual(nums.tolist(), [3, 1, 2, 3, 4])
        
    def test_insert_out_range(self):
        nums = arr.array('i', [1, 2, 3, 4])
        nums.insert(5, 1)
        
        self.assertEqual(nums.tolist(), [1, 2, 3, 4, 1])
        
    def test_insert_other_type(self):
        nums = arr.array('i', [1, 2, 3, 4])
        
        with self.assertRaises(TypeError):
            nums.insert(5, "1")
        
        
class TestAccessOperation(unittest.TestCase):
    def test_access_inner(self):
        nums = arr.array('i', [1, 2, 3, 4])
        
        self.assertEqual(nums[1], 2)
        self.assertEqual(nums[0], 1)
        self.assertEqual(nums[3], 4)

    def test_insert_out_range(self):
        nums = arr.array('i', [1, 2, 3, 4])
        
        with self.assertRaises(IndexError):
            nums[100]
        
          
class TestRemoveOperation(unittest.TestCase):
    def test_pop(self):
        nums = arr.array('i', [1, 2, 3, 4])
        nums.pop(2)
        
        self.assertEqual(nums.tolist(), [1, 2, 4])

    def test_pop_out_range(self):
        nums = arr.array('i', [1, 2, 3, 4])
        with self.assertRaises(IndexError):
            nums.pop(100)
        
    def test_remove_existed(self):
        nums = arr.array('i', [1, 2, 3, 4])
        nums.remove(2)
        
        self.assertEqual(nums.tolist(), [1, 3, 4])
        
    def test_remove_not_existed(self):
        nums = arr.array('i', [1, 2, 3, 4])
        with self.assertRaises(ValueError):
            nums.remove(10)
        
class TestSliceOperation(unittest.TestCase):
    def test_slice_inner(self):
        nums = arr.array('i', [1, 2, 3, 4])
        
        self.assertEqual(nums[1:2].tolist(), [2])
        
    def test_slice_out_range_begin(self):
        nums = arr.array('i', [1, 2, 3, 4])
        
        self.assertEqual(nums[-1:3].tolist(), [])
        
    def test_slice_out_range_end(self):
        nums = arr.array('i', [1, 2, 3, 4])
        
        self.assertEqual(nums[1:13].tolist(), [2, 3, 4])
        
class TestUpdateOperation(unittest.TestCase):
    def test_update_inner(self):
        nums = arr.array('i', [1, 2, 3, 4])
        nums[1] = 3
        
        self.assertEqual(nums.tolist(), [1, 3, 3, 4])
        
    def test_update_out_range(self):
        nums = arr.array('i', [1, 2, 3, 4])
        
        with self.assertRaises(IndexError):
            nums[10] = 3
            
class TestExtendOperation(unittest.TestCase):
    def test_extend(self):
        nums = arr.array('i', [1, 2, 3, 4])
        nums.extend([2])
        
        self.assertEqual(nums.tolist(), [1, 2, 3, 4, 2])
             
class TestSortOperation(unittest.TestCase):
    def test_sorted_method(self):
        nums = arr.array('i', [1,4,6,2,3])
        
        self.assertEqual(sorted(nums), [1, 2, 3, 4, 6])
        
    def test_sorted_method_desc(self):
        nums = arr.array('i', [1,4,6,2,3])
        
        self.assertEqual(sorted(nums, reverse=True), [6, 4, 3, 2, 1])
        
    def test_sorted_method_custom(self):
        nums = ["a", "bca", "b"]
        def sortFunc(item):
            return len(item)
        
        self.assertEqual(sorted(nums, key=sortFunc), ['a', 'b', 'bca'])
    
if __name__ == '__main__':
    unittest.main()