class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.left = None
        self.right = None        

class BinaryTree:
    def __init__(self):
        self.root = None
        
    def insert(self, data):
        if self.root is None:
            self.root = Node(data)
        else:
            self.insert_child(data, self.root)
            
    def insert_child(self, data, current_node):
        if(data < current_node.data):
            if current_node.left is None:
                current_node.left = Node(data)
            else:
                self.insert_child(data, current_node.left)
        else:
            if current_node.right is None:
                current_node.right = Node(data)
            else:
                self.insert_child(data, current_node.right)
       
    def printPostOrder(self, node):
        if node is None:
            return
        
        self.printPostOrder(node.left)
        self.printPostOrder(node.right)
        
        print(node.data)
        
def findPath(root: Node, k):
    if not root:
        # Empty
        return []
    
    if root.data == k:
        return [root.data]

    if(k < root.data):
        return findPath(root.left, k) + [root.data]
    else:
        return findPath(root.right, k) + [root.data]
        
def findAncestors(root: Node, k):
    if not root:
        # Empty
        return []
    
    path = findPath(root, k)
    if path[0] != k:
        # Node not existed
        print("not existed")
        return []
    else:
        return path[1:]
        

tree = BinaryTree()
tree.insert(6)
tree.insert(4)
tree.insert(9)
tree.insert(2)
tree.insert(5)
tree.insert(8)
tree.insert(12)
tree.insert(10)
tree.insert(14)


# tree.printPostOrder(tree.root)
print(findAncestors(None, 10))

print(findAncestors(tree.root, 10))
print(findAncestors(tree.root, 14))
print(findAncestors(tree.root, 0))




