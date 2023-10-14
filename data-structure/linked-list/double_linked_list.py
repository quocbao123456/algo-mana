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

    def insert_at_index(self, index, data):
        if self.head is None and index != 0: return

        new_node = Node(data)
        if index == 0:
            new_node.next = self.head
            if self.head is not None:
                self.head.prev = new_node
            self.head = new_node
        else:
            current = self.head
            for i in range(index - 1):
                if current is None:
                    return
                current = current.next
            new_node.next = current.next
            new_node.prev = current
            if current.next is not None:
                current.next.prev = new_node
            current.next = new_node
            
    def sort(self):
        # Bubble sort
        if self.head is None:
            return

        current = None
        new_head = None
        move_node = None
        prev = None

        while self.head is not None:
            prev = None
            current = self.head
            move_node = self.head

            while current is not None:
                if current.next is not None and current.next.data > move_node.data:
                    move_node = current.next
                    prev = current

                current = current.next

            if move_node == self.head:
                self.head = self.head.next

            if prev is not None:
                prev.next = move_node.next

            move_node.prev = prev
            move_node.next = new_head
            if new_head is not None:
                new_head.prev = move_node
            new_head = move_node

        self.head = new_head
        
list = DoubleLinkedList()
list.insert(3)
list.insert(5)
list.insert(7)
list.insert(10)

list.delete(10)

# print(list.search(4))
# print(list.search(10))

list.print()