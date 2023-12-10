class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def is_empty(self):
        return self.head is None

    def enqueue(self, item):
        temp = Node(item)
        if self.tail is None:
            self.head = self.tail = temp
            self.size = 1
            return
        self.tail.next = temp
        self.tail = temp
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            return
        temp = self.head
        self.head = temp.next
        temp.next = None
        
        if(self.head == None):
            self.tail = None
        
        self.size -= 1
            
    def is_empty(self):
        return self.size == 0

    def get_values(self):
        list = []
        
        tmp_node = self.head
        while(tmp_node is not None):
            list.append(tmp_node.data)
            tmp_node = tmp_node.next
            
        return list