class Node:
    def __init__(self, value):
        self.data = value
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        if self.head is None: return []
        list = [self.head.data]

        tmp_node = self.head.next
        while tmp_node is not None and tmp_node != self.head:
            list.append(tmp_node.data)
            tmp_node = tmp_node.next
            
        return list

    def insert_at_index(self, index, data):
        if self.head is None and index != 0: return

        new_node = Node(data)
        if index == 0:
            new_node.next = self.head
            if self.head is not None:
                self.head.next = new_node
            self.head = new_node
        else:
            current = self.head
            for i in range(index - 1):
                if current is None:
                    return
                current = current.next
            new_node.next = current.next
            current.next = new_node

    def insert(self,val):
        if self.head is None:
            new_node = Node(val)
            new_node.next = new_node
            self.head = new_node
            return 
        
        # Traverse to tail node
        tmp_node = self.head
        while tmp_node is not None and tmp_node.next != self.head:
            tmp_node = tmp_node.next

        new_node = Node(val)
        new_node.next = self.head
        tmp_node.next = new_node

    def delete(self, val):
        if self.head is None:
            return 
        
        if self.head.data == val:
            if self.head.next == self.head:
                self.head = None
                return
            
            # Traverse to tail node
            tmp_node = self.head
            while tmp_node.next != self.head:
                tmp_node = tmp_node.next

            tmp_node.next = self.head.next
            self.head = tmp_node.next
            return
        
        next_node = self.head
        prev_node = None
        
        while next_node.next and next_node.next != self.head:
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
        
        if self.head.data == target: return 0

        tmp_node = self.head.next
        index = 1
        while tmp_node != self.head:
            if(tmp_node.data == target):
                return index
            tmp_node = tmp_node.next
            index += 1
        
        return -1

    def sort(self):  
        current = self.head;  
        if(self.head == None): return
        
        while(True):  
            index = current.next;  
            while(index != self.head):  
                if(current.data > index.data):  
                    temp = current.data;  
                    current.data = index.data;  
                    index.data = temp;  
                index= index.next;  
            current =current.next;  
            if(current.next == self.head):  
                break;  