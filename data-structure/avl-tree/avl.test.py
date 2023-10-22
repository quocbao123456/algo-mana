import unittest
from avl import AVLTree

class TestAVLTreeOperations(unittest.TestCase):
    avlTree = AVLTree()
    root = None
        
    def test_empty_tree(self):
        self.assertEqual(self.root, None)

        self.assertEqual(self.avlTree.getHeight(self.root), 0)
        self.assertEqual(self.avlTree.getBalance(self.root), 0)

    def test_insert_root(self):
        self.root = self.avlTree.insert(self.root, 10)

        self.assertEqual(self.avlTree.traverse(self.root), [10])
        self.assertEqual(self.avlTree.getHeight(self.root), 1)
        self.assertEqual(self.avlTree.getBalance(self.root), 0)

    def test_insert_multi_tree(self):
        self.root = self.avlTree.insert(self.root, 10)
        self.root = self.avlTree.insert(self.root, 1)
        
        self.assertEqual(self.avlTree.traverse(self.root), [1, 10])
        self.assertEqual(self.avlTree.getHeight(self.root), 2)
        self.assertEqual(self.avlTree.getBalance(self.root), 1)
     
    def test_insert_balance(self):
        self.root = self.avlTree.insert(self.root, 10)
        self.root = self.avlTree.insert(self.root, 1)
        self.root = self.avlTree.insert(self.root, 2)
        
        self.assertEqual(self.avlTree.traverse(self.root), [1, 2, 10])
        self.assertEqual(self.avlTree.getHeight(self.root), 2)
        self.assertEqual(self.avlTree.getBalance(self.root), 0)   
        
    def test_insert_skewed_right(self):
        self.root = self.avlTree.insert(self.root, 1)
        self.root = self.avlTree.insert(self.root, 2)
        self.root = self.avlTree.insert(self.root, 3)
        
        self.assertEqual(self.avlTree.traverse(self.root), [1, 2, 3])
        self.assertEqual(self.avlTree.getHeight(self.root), 2)
        self.assertEqual(self.avlTree.getBalance(self.root), 0)   
        
    def test_insert_skewed_left(self):
        self.root = self.avlTree.insert(self.root, 3)
        self.root = self.avlTree.insert(self.root, 2)
        self.root = self.avlTree.insert(self.root, 1)
        
        self.assertEqual(self.avlTree.traverse(self.root), [1,2,3])
        self.assertEqual(self.avlTree.getHeight(self.root), 2)
        self.assertEqual(self.avlTree.getBalance(self.root), 0)   
    
    # Search
    def test_search_empty_tree(self):
        self.assertEqual(self.avlTree.search(self.root, 3), False)
        
    def test_search_root(self):
        self.root = self.avlTree.insert(self.root, 3)
        self.root = self.avlTree.insert(self.root, 2)
        self.root = self.avlTree.insert(self.root, 1)

        self.assertEqual(self.avlTree.search(self.root, 0), False)
        self.assertEqual(self.avlTree.search(self.root, 2), True)
        self.assertEqual(self.avlTree.search(self.root, 4), False)
    
    def test_search_left(self):
        self.root = self.avlTree.insert(self.root, 3)
        self.root = self.avlTree.insert(self.root, 2)
        self.root = self.avlTree.insert(self.root, 1)

        self.assertEqual(self.avlTree.search(self.root, 0), False)
        self.assertEqual(self.avlTree.search(self.root, 3), True)
    
class TestAVLTreeComplexOperations(unittest.TestCase):
    def test_empty_tree(self): 
        self.avlTree = AVLTree()
        self.root = None
    
        self.root = self.avlTree.insert(self.root, 1)
        self.root = self.avlTree.insert(self.root, 3)
        self.root = self.avlTree.insert(self.root, 9)
        self.root = self.avlTree.insert(self.root, 2)
        self.root = self.avlTree.insert(self.root, 1)
        self.root = self.avlTree.insert(self.root, 6)
        self.root = self.avlTree.insert(self.root, 5)  
              
        self.assertEqual(self.avlTree.traverse(self.root), [1, 1, 2, 3, 5, 6, 9])
        self.assertEqual(self.avlTree.getHeight(self.root), 3)
        self.assertEqual(self.avlTree.getBalance(self.root), 0)   
        self.assertEqual(self.avlTree.search(self.root, 3), True)   
        self.assertEqual(self.avlTree.search(self.root, 5), True)   
        self.assertEqual(self.avlTree.search(self.root, 4), False)   

if __name__ == '__main__':
    unittest.main()