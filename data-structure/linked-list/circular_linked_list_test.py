import unittest
from circular_linked_list import CircularLinkedList

class TestSingleOperation(unittest.TestCase):
    # Traverse
    def test_traverse_empty(self):
        circular_linked_list = CircularLinkedList()
        self.assertEqual(circular_linked_list.traverse(), [])
    
    def test_traverse(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        self.assertEqual(circular_linked_list.traverse(), [1])
       
    def test_traverse_multi_node(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        circular_linked_list.insert(3)
        
        self.assertEqual(circular_linked_list.traverse(), [1, 3]) 
        
    # Insert
    def test_insert_empty(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        
        self.assertEqual(circular_linked_list.traverse(), [1])
        
    def test_insert(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        circular_linked_list.insert(2)
        
        self.assertEqual(circular_linked_list.traverse(), [1, 2])
    
     # Insert by index
    def test_insert_index(self):
        circular_linked_list = CircularLinkedList()
       
        circular_linked_list.insert_at_index(0, 1) # head
        circular_linked_list.insert_at_index(1, 2) # tail
        self.assertEqual(circular_linked_list.traverse(), [1, 2])

    def test_insert_index_out_range(self):
        circular_linked_list = CircularLinkedList()
       
        circular_linked_list.insert_at_index(0, 1) 
        circular_linked_list.insert_at_index(3, 2) # out range
        self.assertEqual(circular_linked_list.traverse(), [1])

    def test_insert_index_out_range_root(self):
        circular_linked_list = CircularLinkedList()
       
        circular_linked_list.insert_at_index(1, 2)
        self.assertEqual(circular_linked_list.traverse(), [])
        
    # Delete
    def test_delete_empty(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.delete(1)
        
        self.assertEqual(circular_linked_list.traverse(), [])
        
    def test_delete(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        circular_linked_list.insert(3)
        circular_linked_list.delete(1)
        
        self.assertEqual(circular_linked_list.traverse(), [3])
        
    def test_delete_make_empty(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        circular_linked_list.delete(1)
        
        self.assertEqual(circular_linked_list.traverse(), [])
        
    def test_delete_not_existed(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        circular_linked_list.delete(3)
        
        self.assertEqual(circular_linked_list.traverse(), [1])
        
    def test_delete_multi_existed(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        circular_linked_list.insert(1)
        circular_linked_list.delete(1)
        
        self.assertEqual(circular_linked_list.traverse(), [1])
    
    # Search
    def test_search(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        circular_linked_list.insert(2)
        
        self.assertEqual(circular_linked_list.search(2), 1)
        
    def test_search_empty(self):
        circular_linked_list = CircularLinkedList()
        
        self.assertEqual(circular_linked_list.search(1), -1)
        
    def test_search_not_existed(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1) 
        circular_linked_list.insert(2)

        self.assertEqual(circular_linked_list.search(3), -1)
    
    def test_search_head(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1) 
        circular_linked_list.insert(2)

        self.assertEqual(circular_linked_list.search(1), 0)
        
    def test_search_tail(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1) 
        circular_linked_list.insert(2)
        circular_linked_list.insert(3)

        self.assertEqual(circular_linked_list.search(3), 2)
        
    def test_sort(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(1)
        circular_linked_list.insert(9)
        circular_linked_list.insert(3)
        circular_linked_list.sort()
        
        self.assertEqual(circular_linked_list.traverse(), [1, 3, 9])
        
    def test_sort_empty(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.sort()
        
        self.assertEqual(circular_linked_list.traverse(), [])  
        
    def test_sort_only_head(self):
        circular_linked_list = CircularLinkedList()
        circular_linked_list.insert(9)
        circular_linked_list.sort()
        
        self.assertEqual(circular_linked_list.traverse(), [9])  
class TestMultiOperation(unittest.TestCase):
    def test_multi_operations(self):
        circular_linked_list = CircularLinkedList()
        
        circular_linked_list.insert(1) 
        circular_linked_list.insert(2)
        circular_linked_list.insert(9) 
        circular_linked_list.delete(2) 

        self.assertEqual(circular_linked_list.traverse(), [1, 9])
        
if __name__ == '__main__':
    unittest.main()