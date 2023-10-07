class Node:
    def __init__(self, value):
        self.data = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def print(self):
        tmpNode = self.head
        while tmpNode:
            print(tmpNode.data)
            tmpNode = tmpNode.next

    def traverse(self):
        tmpNode = self.head
        while tmpNode:
            print(tmpNode.data)
            tmpNode = tmpNode.next

    def insert(self,val):
        if self.head is None:
            self.head = Node(val)
            return 
        
        # Traverse to tail node
        tmpNode = self.head
        while tmpNode.next:
            tmpNode = tmpNode.next

        tmpNode.next = Node(val)

    def delete(self, val):
        if self.head is None:
            return 
        
        if self.head.data == val:
            self.head = self.head.next
            return
        
        # Traverse to tail node
        nextNode = self.head
        prevNode = None

        while nextNode.next:
            if(nextNode.data == val):
                break

            prevNode = nextNode
            nextNode = nextNode.next

        if(nextNode is None):
            return
        prevNode.next = nextNode.next
        nextNode = None

    def search(self, target):
        if self.head is None:
            return -1
        
        tmpNode = self.head
        index = 0
        while tmpNode:
            if(tmpNode.data == target):
                return index
            tmpNode = tmpNode.next
            index += 1
        
        return -1


list = LinkedList()
list.insert(3)
list.insert(5)
list.insert(7)
list.insert(10)

list.delete(3)

print(list.search(4))
print(list.search(10))

list.print()