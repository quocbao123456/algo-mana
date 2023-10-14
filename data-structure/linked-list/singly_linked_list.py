class Node:
    def __init__(self, value):
        self.data = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        
    def print(self):
        tmp_node = self.head
        while tmp_node:
            print(tmp_node.data)
            tmp_node = tmp_node.next

    def traverse(self):
        list = []
        
        tmp_node = self.head
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

        tmp_node.next = Node(val)

    def delete(self, val):
        if self.head is None:
            return 
        
        if self.head.data == val:
            self.head = self.head.next
            return
        
        # Traverse to tail node
        next_node = self.head
        prev_node = None

        while next_node.next:
            if(next_node.data == val):
                break

            prev_node = next_node
            next_node = next_node.next

        if(prev_node is None):
            return
                
        prev_node.next = next_node.next
        next_node = None

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

    def insert_at_index(self, index, val):
        if self.head is None and index != 0: return
        
        new_node = Node(val)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            for i in range(index - 1):
                if current is None:
                    return
                current = current.next
            new_node.next = current.next
            current.next = new_node

    def get_middle_node(self):
        if (self.head == None):
            return self.head
        slow = self.head
        fast = self.head
        while(fast.next != None and fast.next.next != None):
            slow = slow.next
            fast = fast.next.next
        return slow
    
    def swap(node1: Node, node2: Node): 
        tmp = node1.data
        node2.data = node1.data
        node1.data = tmp
    
 
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

            move_node.next = new_head
            new_head = move_node

        self.head = new_head

# list = LinkedList()
# list.insert(1)
# list.delete(3)

# # list.insert(5)
# # list.insert(7)
# # list.insert(10)


# print(list.search(4))
# print(list.search(10))

# list.print()