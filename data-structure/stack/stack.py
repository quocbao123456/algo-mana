class Node:
    def __init__(self, value):
        self.data = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
        self.size = 0
        
    def push(self, val):
        new_node = Node(val)
        new_node.next = self.top
        self.top = new_node
        self.size += 1
        
    def pop(self):
        if(self.top is None):
            return None
        
        tmp_node = self.top
        self.top = self.top.next
        tmp_node.next = None
        
        self.size -= 1
        
        return tmp_node.data
    
    def peek(self):
        if(self.top is None):
            return None        
        
        return self.top.data
    
    def is_empty(self):
        return self.size == 0
    
    def get_values(self):
        list = []
        
        tmp_node = self.top
        while(tmp_node is not None):
            list.append(tmp_node.data)
            tmp_node = tmp_node.next
            
        return list