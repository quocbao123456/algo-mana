class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    
    def getHeight(self, root):
        if not root:
            return 0
        return root.height

    def getBalance(self, root):
        if not root:
            return 0
        return self.getHeight(root.left) - self.getHeight(root.right)
    
    def traverse(self, root):
        list = []
        if root.left is not None:
            list.extend(self.traverse(root.left))
        if root.data is not None:
            list.append(root.data)
        if root.right is not None:
            list.extend(self.traverse(root.right))
        return list
    
    def insert(self, root, value):
        if not root:
            return Node(value)
        elif value < root.data:
            root.left = self.insert(root.left, value)
        else:
            root.right = self.insert(root.right, value)

        # Update the height of the ancestor node
        root.height = 1 + max(self.getHeight(root.left), self.getHeight(root.right))

        # Get the balance factor
        balance = self.getBalance(root)

        # If the node is unbalanced, then try out the 4 cases
        # Rotate left
        if balance > 1 and value < root.left.data:
            return self.rightRotate(root)

        # Rotate right
        if balance < -1 and value > root.right.data:
            return self.leftRotate(root)

        # Rotate left right
        if balance > 1 and value > root.left.data:
            root.left = self.leftRotate(root.left)
            return self.rightRotate(root)

        # Rotate right left
        if balance < -1 and value < root.right.data:
            root.right = self.rightRotate(root.right)
            return self.leftRotate(root)

        return root

    def leftRotate(self, node):
        right_node = node.right
        left_right_node = right_node.left
        right_node.left = node
        node.right = left_right_node
        node.height = 1 + max(self.getHeight(node.left), self.getHeight(node.right))
        right_node.height = 1 + max(self.getHeight(right_node.left), self.getHeight(right_node.right))
        return right_node

    def rightRotate(self, node):
        left_node = node.left
        right_left_node = left_node.right
        left_node.right = node
        node.left = right_left_node
        node.height = 1 + max(self.getHeight(node.left), self.getHeight(node.right))
        left_node.height = 1 + max(self.getHeight(left_node.left), self.getHeight(left_node.right))
        return left_node

    def search(self, node, value):
        if node is None:
            return False
        if node.data == value:
            return True
        elif node.data < value:
            return self.search(node.right, value)
        else:
            return self.search(node.left, value)