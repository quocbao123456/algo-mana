class Node:
    def __init__(self, value):
        self.data = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def print(self):
        if self.head is None: return
        print(self.head.data)

        tmpNode = self.head.next
        while tmpNode and tmpNode != self.head:
            print(tmpNode.data)
            tmpNode = tmpNode.next

    def insert(self,val):
        if self.head is None:
            newNode = Node(val)
            newNode.next = newNode
            self.head = newNode
            return 
        
        # Traverse to tail node
        tmpNode = self.head
        while tmpNode.next != self.head:
            tmpNode = tmpNode.next

        newNode = Node(val)
        newNode.next = self.head
        tmpNode.next = newNode

    def delete(self, val):
        if self.head is None:
            return 
        
        if self.head.data == val:
            if self.head.next == self.head:
                self.head = None
                return
            
            # Traverse to tail node
            tmpNode = self.head
            while tmpNode.next != self.head:
                tmpNode = tmpNode.next

            tmpNode.next = self.head.next
            self.head = tmpNode.next
            return
        
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
        
        if self.head.data == target: return 0

        tmpNode = self.head.next
        index = 1
        while tmpNode != self.head:
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

# list.delete(5)

# print(list.search(4))
print(list.search(10))

list.print()