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
    
    def getMinValueNode(self, root):
        tmp_node = root
        while(tmp_node is not None and tmp_node.left is not None):
            tmp_node = tmp_node.left
        
        return tmp_node
    
    def updateHeight(self, node):
        node.height = 1 + max(self.getHeight(node.left), self.getHeight(node.right))

    def balanceTree(self, root):
        balance = self.getBalance(root)

        # Case 1 - Left Left
        if balance > 1 and self.getBalance(root.left) >= 0:
            return self.rightRotate(root)
 
        # Case 2 - Right Right
        if balance < -1 and self.getBalance(root.right) <= 0:
            return self.leftRotate(root)
 
        # Case 3 - Left Right
        if balance > 1 and self.getBalance(root.left) < 0:
            root.left = self.leftRotate(root.left)
            return self.rightRotate(root)
 
        # Case 4 - Right Left
        if balance < -1 and self.getBalance(root.right) > 0:
            root.right = self.rightRotate(root.right)
            return self.leftRotate(root)
 
        return root
    
    def insert(self, root, value):
        # if not root:
        #     return Node(value)
        # elif value < root.data:
        #     root.left = self.insert(root.left, value)
        # else:
        #     root.right = self.insert(root.right, value)
        
        
        # Not recursive
        new_node = Node(value)
        if root is None:
            return new_node

        current_node = root
        while True:
            if value < current_node.data:
                if current_node.left is None:
                    current_node.left = new_node
                    break
                else:
                    current_node = current_node.left
            else:
                if current_node.right is None:
                    current_node.right = new_node
                    break
                else:
                    current_node = current_node.right

        self.updateHeight(current_node)
        
        return self.balanceTree(root)
     
    def delete(self, root, value):
        if not root: return None
 
        # elif value < root.data:
        #     root.left = self.delete(root.left, value)
 
        # elif value > root.data:
        #     root.right = self.delete(root.right, value)
 
        # else:
        #     if root.left is None:
        #         temp = root.right
        #         root = None
        #         return temp
 
        #     elif root.right is None:
        #         temp = root.left
        #         root = None
        #         return temp
 
        #     temp = self.getMinValueNode(root.right)
        #     root.data = temp.data
        #     root.right = self.delete(root.right,
        #                               temp.data)
    
        # Non recursive
        stack = []
        current_node = root
        while current_node is not None and current_node.data != value:
            if value < current_node.data:
                stack.append(current_node)
                current_node = current_node.left
            elif value > current_node.data:
                stack.append(current_node)
                current_node = current_node.right
 
        if current_node is root:
            root = None
            return root
        
        # Empty tree
        if current_node is None: return None
        
        if current_node.left is not None and current_node.right is not None:
            temp = current_node.right
            while temp.left is not None:
                stack.append(temp)
                temp = temp.left
            current_node.value = temp.value
            if stack[-1].left == temp:
                stack[-1].left = temp.right
            else:
                stack[-1].right = temp.right
        elif current_node.left is not None:
            if stack:
                if stack[-1].left == current_node:
                    stack[-1].left = current_node.left
                else:
                    stack[-1].right = current_node.left
            else:
                current_node = current_node.left
            
        elif current_node.right is not None:
            if stack:
                if stack[-1].left == current_node:
                    stack[-1].left = current_node.right
                else:
                    stack[-1].right = current_node.right
            else:
                current_node = current_node.right
        else:
            if stack:
                if stack[-1].left == current_node:
                    stack[-1].left = None
                else:
                    stack[-1].right = None
            else:
                current_node = None
        
        # Update height
        if current_node is not None: self.updateHeight(current_node)
        self.updateHeight(root)
        return self.balanceTree(root)

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

    def search(self, root, value):
        current_node = root
        while(current_node is not None and current_node.data != value):
            if(current_node.data > value):
                current_node = current_node.left
            else:
                current_node = current_node.right
        
        if current_node is None:
            return False
        
        return True
       