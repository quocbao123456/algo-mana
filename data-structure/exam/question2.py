class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None
        

class LinkedList:
    def __init__(self):
        self.head = None
        
    def insert(self, data):
        if self.head is None:
            self.head = Node(data)
            return
        
        temp = self.head
        while temp.next is not None:
            temp = temp.next
            
        temp.next = Node(data)
        
    def print(self):
        list = []
        
        tmp_node = self.head
        while tmp_node is not None:
            list.append(tmp_node.value)
            tmp_node = tmp_node.next
            
        print(list)

def remove_duplicates(lst: LinkedList):
    if lst.head is None:
        # Empty list
        return lst
    
    def removeNode(prev_node, current_node):
        if current_node.next is None:
            # Remove at tail
            prev_node.next = None
            return   
        
        next_node = current_node.next
        prev_node.next = next_node
        
        current_node = None
        
        
    visiteds = set()
    # Exist node values
    
    prev_node = None
    tmp_node = lst.head
    
    while tmp_node is not None:
        if tmp_node.value in visiteds: 
            # Duplicate
            removeNode(prev_node, tmp_node)
            tmp_node = prev_node.next
            
            continue
        
        visiteds.add(tmp_node.value)
        
        prev_node = tmp_node
        tmp_node = tmp_node.next
        
    return lst
        
 
        
list = LinkedList()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(3)
list.insert(2)
list.insert(2)
list.insert(3)
list.insert(2)


list1 = LinkedList()

remove_duplicates(list)
remove_duplicates(list1)

# list.print()