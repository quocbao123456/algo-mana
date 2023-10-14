import unittest
from singly_linked_list import LinkedList

class TestSingleOperation(unittest.TestCase):
    # Traverse
    def test_traverse_empty(self):
        linked_list = LinkedList()
        self.assertEqual(linked_list.traverse(), [])
    
    def test_traverse(self):
        linked_list = LinkedList()
        linked_list.insert(1)
        self.assertEqual(linked_list.traverse(), [1])
        
        
    # Insert
    
    def test_insert_empty(self):
        linked_list = LinkedList()
        linked_list.insert(1)
        
        self.assertEqual(linked_list.traverse(), [1])
        
    def test_insert(self):
        linked_list = LinkedList()
        linked_list.insert(1)
        linked_list.insert(2)
        
        self.assertEqual(linked_list.traverse(), [1, 2])
    
    # Delete
    def test_delete_empty(self):
        linked_list = LinkedList()
        linked_list.delete(1)
        
        self.assertEqual(linked_list.traverse(), [])
        
    def test_delete(self):
        linked_list = LinkedList()
        linked_list.insert(1)
        linked_list.insert(3)
        linked_list.delete(1)
        
        self.assertEqual(linked_list.traverse(), [3])
        
    def test_delete_make_empty(self):
        linked_list = LinkedList()
        linked_list.insert(1)
        linked_list.delete(1)
        
        self.assertEqual(linked_list.traverse(), [])
        
    def test_delete_not_existed(self):
        linked_list = LinkedList()
        linked_list.insert(1)
        linked_list.delete(3)
        
        self.assertEqual(linked_list.traverse(), [1])
        
    def test_delete_multi_existed(self):
        linked_list = LinkedList()
        linked_list.insert(1)
        linked_list.insert(1)
        linked_list.delete(1)
        
        self.assertEqual(linked_list.traverse(), [1])
    
    # Search
    def test_search(self):
        linked_list = LinkedList()
        linked_list.insert(1)
        linked_list.insert(2)
        
        self.assertEqual(linked_list.search(2), 1)
        
    def test_search_empty(self):
        linked_list = LinkedList()
        
        self.assertEqual(linked_list.search(1), -1)
        
    def test_search_not_existed(self):
        linked_list = LinkedList()
        linked_list.insert(1) 
        linked_list.insert(2)

        self.assertEqual(linked_list.search(3), -1)
    
    def test_search_head(self):
        linked_list = LinkedList()
        linked_list.insert(1) 
        linked_list.insert(2)

        self.assertEqual(linked_list.search(1), 0)
        
    def test_search_tail(self):
        linked_list = LinkedList()
        linked_list.insert(1) 
        linked_list.insert(2)
        linked_list.insert(3)

        self.assertEqual(linked_list.search(3), 2)
        
class TestMultiOperation(unittest.TestCase):
    def test_multi_operations(self):
        linked_list = LinkedList()
        
        linked_list.insert(1) 
        linked_list.insert(2)
        linked_list.insert(9) 
        linked_list.delete(2) 

        self.assertEqual(linked_list.traverse(), [1, 9])
        
if __name__ == '__main__':
    unittest.main()