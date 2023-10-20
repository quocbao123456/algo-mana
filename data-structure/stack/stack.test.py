import unittest
from stack import Stack

class TestStackOperations(unittest.TestCase):
    def test_init(self):
        stack = Stack()
        self.assertEqual(stack.size, 0)
        self.assertEqual(stack.top, None)
        self.assertEqual(stack.get_values(), [])
    
    # Push
    def test_push_empty_stack(self):
        stack = Stack()
        
        stack.push(1)
        self.assertEqual(stack.get_values(), [1])
    
    def test_push_multi_element(self):
        stack = Stack()
        
        stack.push(1)
        stack.push(2)
        
        self.assertEqual(stack.get_values(), [2, 1])
        
    # Pop
    def test_pop_empty_stack(self):
        stack = Stack()
        
        self.assertEqual(stack.pop(), None)
        self.assertEqual(stack.top, None)

    
    def test_pop(self):
        stack = Stack()
        
        stack.push(1)
        stack.push(2)
        
        self.assertEqual(stack.pop(), 2)
        self.assertEqual(stack.top.data, 1)
        
    # Peek
    def test_peek_empty_stack(self):
        stack = Stack()
        
        self.assertEqual(stack.peek(), None)
    
    def test_peek(self):
        stack = Stack()
        
        stack.push(1)
        stack.push(2)
        
        self.assertEqual(stack.peek(), 2)
        self.assertEqual(stack.top.data, 2)

    # empty
    def test_is_empty_empty_stack(self):
        stack = Stack()
        
        self.assertEqual(stack.is_empty(), True)

    def test_is_empty_only_one(self):
        stack = Stack()
        stack.push(1)
        
        self.assertEqual(stack.is_empty(), False)
    
    def test_is_empty_multi(self):
        stack = Stack()
        stack.push(1)
        stack.push(2)
        
        self.assertEqual(stack.is_empty(), False)
        
class TestStackMultiOperations(unittest.TestCase):
    def test_init(self):
        stack = Stack()

        self.assertEqual(stack.is_empty(), True)
        
        stack.push(1)

        self.assertEqual(stack.peek(), 1)       
        self.assertEqual(stack.pop(), 1)
        self.assertEqual(stack.is_empty(), True)
        
        stack.push(2)
        stack.push(3)
        
        self.assertEqual(stack.peek(), 3)
        self.assertEqual(stack.pop(), 3)
        self.assertEqual(stack.is_empty(), False)
    
    # Push
if __name__ == '__main__':
    unittest.main()