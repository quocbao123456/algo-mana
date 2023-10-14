import unittest
from binary_search_tree import BSTNode

class TestBST(unittest.TestCase):
    def test_init_root(self):
        bst = BSTNode(3)
        self.assertEqual(bst.inorder(), [3])
    
    # Insert
    def test_insert(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)
        
        self.assertEqual(bst.inorder(), [2, 3, 4, 9])

    def test_insert_same_root(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(3)
        
        self.assertEqual(bst.inorder(), [2, 3])
        
    def test_insert_same_child(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)
        bst.insert(4)
        
        self.assertEqual(bst.inorder(), [2, 3, 4, 9])
    
    def test_get_min(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)
        
        self.assertEqual(bst.min(), 2)
        
    def test_get_max(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)
        
        self.assertEqual(bst.max(), 9)
           
    def test_search_root(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)

        self.assertEqual(bst.search(3), True)
        
    def test_search_child(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)

        self.assertEqual(bst.search(4), True)
        
    def test_search_not_existed(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)

        self.assertEqual(bst.search(10), False)
   
    def test_traverse(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)

        self.assertEqual(bst.inorder(), [2, 3, 4, 9])
        self.assertEqual(bst.preorder(), [3, 2, 9, 4])   
        self.assertEqual(bst.postorder(), [2, 4, 9, 3])    
      
    def test_traverse_not_recursive(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)

        self.assertEqual(bst.inorder_not_recursive(), [2, 3, 4, 9])
        self.assertEqual(bst.preorder_not_recursive(), [3, 2, 9, 4])   
        self.assertEqual(bst.postorder_not_recursive(), [2, 4, 9, 3]) 
           
    def test_traverse_root(self):
        bst = BSTNode(3)

        self.assertEqual(bst.inorder_not_recursive(), [3])
        self.assertEqual(bst.preorder_not_recursive(), [3])   
        self.assertEqual(bst.postorder_not_recursive(), [3]) 
        
    def test_bfs_not_recursive(self):
        bst = BSTNode(3)
        bst.insert(2)
        bst.insert(9)
        bst.insert(4)

        self.assertEqual(bst.bfs(), [3, 2, 9, 4])     
    
    def test_bfs_not_recursive_root(self):
        bst = BSTNode(3)
       
        self.assertEqual(bst.bfs(), [3])     
        
if __name__ == '__main__':
    unittest.main()