import unittest
from queue_linked_list import Queue

class TestQueueOperations(unittest.TestCase):
    def test_init(self):
        queue = Queue()
        self.assertEqual(queue.head, None)
        self.assertEqual(queue.tail, None)
        self.assertEqual(queue.get_values(), [])
    
    # Enqueue
    def test_enqueue_empty_queue(self):
        queue = Queue()
        
        queue.enqueue(1)
        self.assertEqual(queue.get_values(), [1])
    
    def test_enqueue_multi_element(self):
        queue = Queue()
        
        queue.enqueue(1)
        queue.enqueue(2)
        
        self.assertEqual(queue.get_values(), [1, 2])
        
    # Dequeue
    def test_dequeue_empty_queue(self):
        queue = Queue()
        
        self.assertEqual(queue.dequeue(), None)
        self.assertEqual(queue.is_empty(), True)

    def test_dequeue(self):
        queue = Queue()
        
        queue.enqueue(1)
        queue.enqueue(2)
        queue.dequeue()
        
        self.assertEqual(queue.get_values(), [2])
        
    def test_dequeue_all(self):
        queue = Queue()
        
        queue.enqueue(1)
        queue.enqueue(2)
        queue.dequeue()
        queue.dequeue()
        
        self.assertEqual(queue.get_values(), [])

    # empty
    def test_is_empty_empty_queue(self):
        queue = Queue()
        
        self.assertEqual(queue.is_empty(), True)

    def test_is_empty_only_one(self):
        queue = Queue()
        queue.enqueue(1)
        
        self.assertEqual(queue.is_empty(), False)
    
    def test_is_empty_multi(self):
        queue = Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        
        self.assertEqual(queue.is_empty(), False)
        
class TestQueueMultiOperations(unittest.TestCase):
    def test_combine_operations(self):
        queue = Queue()

        self.assertEqual(queue.is_empty(), True)
        
        queue.enqueue(1)
        queue.dequeue()

        self.assertEqual(queue.is_empty(), True)
        
        queue.enqueue(2)
        queue.enqueue(3)
        queue.dequeue()
        
        self.assertEqual(queue.get_values(), [3])
        self.assertEqual(queue.is_empty(), False)
    
if __name__ == '__main__':
    unittest.main()