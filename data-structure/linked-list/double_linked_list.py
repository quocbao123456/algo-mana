class Node:
    def __init__(self, value):
        self.data = value
        self.prev = None
        self.next = None

class DoubleLinkedList:
    def __init__(self):
        self.head = None
    
    def print(self):
        tmp_node = self.head
        while tmp_node:
            print(tmp_node.data)
            tmp_node = tmp_node.next

    def traverse(self):
        tmp_node = self.head
        list = []
        while tmp_node:
            list.append(tmp_node.data)
            tmp_node = tmp_node.next
        return list

    def insert(self,val):
        if self.head is None:
            self.head = Node(val)
            return 
        
        # Traverse to tail node
        tmp_node = self.head
        while tmp_node.next:
            tmp_node = tmp_node.next

        new_node = Node(val)
        tmp_node.next = new_node
        new_node.prev = tmp_node

    def delete(self, val):
        if self.head is None:
            return 
        
        if self.head.data == val:
            self.head = self.head.next
            return
        
        # Traverse to tail node
        tmp_node = self.head
        while tmp_node.next:
            if(tmp_node.data == val):
                break

            tmp_node = tmp_node.next

        if(tmp_node.prev is None):
            return
    
        prev_node = tmp_node.prev
        next_node = tmp_node.next

        prev_node.next = next_node
        tmp_node = None

    def search(self, target):
        if self.head is None:
            return -1
        
        tmp_node = self.head
        index = 0
        while tmp_node:
            if(tmp_node.data == target):
                return index
            tmp_node = tmp_node.next
            index += 1
        
        return -1

    
list = DoubleLinkedList()
list.insert(3)
list.insert(5)
list.insert(7)
list.insert(10)

list.delete(10)

# print(list.search(4))
# print(list.search(10))

list.print()