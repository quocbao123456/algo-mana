class BSTNode:
    def __init__(self, value = None):
        self.left = None
        self.right = None
        self.val = value

    def insert(self, key):
        if self.val is None:
            self.val = key
            return

        if self.val == key:
            return

        if key < self.val:
            if self.left:
                self.left.insert(key)
                return
            self.left = BSTNode(key)
            return

        if self.right:
            self.right.insert(key)
            return
        self.right = BSTNode(key)
    
    def min(self):
        if(self.val is None): return None
        
        current = self
        while current.left is not None:
            current = current.left
        return current.val

    def max(self):
        current = self
        while current.right is not None:
            current = current.right
        return current.val
    
    def search(self, target):
        if self.val is None: return False
        
        if self.val == target:
            return True
    
        if self.val < target and self.right:
            return self.right.search(target)
        
        if self.val > target and self.left:
            return self.left.search(target)
        
        return False

    def bfs(self):
        queue = [self]
        result = []
        while queue:
            node = queue.pop(0)
            result.append(node.val)
            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)
                
        return result
    
    def preorder(self):
        list = []
        if self.val is not None:
            list.append(self.val)
        if self.left is not None:
            list.extend(self.left.preorder())
        if self.right is not None:
            list.extend(self.right.preorder())
        return list

    def preorder_not_recursive(self):
        if self is None:
            return []
        
        result = []
        stack = [self]
        while stack:
            node = stack.pop()
            result.append(node.val)
            if node.right is not None:
                stack.append(node.right)
            if node.left is not None:
                stack.append(node.left)
        return result
    
    def inorder(self):
        list = []
        if self.left is not None:
            list.extend(self.left.inorder())
        if self.val is not None:
            list.append(self.val)
        if self.right is not None:
            list.extend(self.right.inorder())
        return list

    def inorder_not_recursive(self):
        result = []
        stack = []
        current = self

        while True:
            if current is not None:
                stack.append(current)
                current = current.left
            elif(stack):
                current = stack.pop()
                result.append(current.val)
                current = current.right
            else:
                break
            
        return result

    def postorder(self):
        list = []
        if self.left is not None:
            list.extend(self.left.postorder())
        if self.right is not None:
            list.extend(self.right.postorder())
        if self.val is not None:
            list.append(self.val)
        return list
    
    def postorder_not_recursive(root):
        result = []
        stack = [(root, False)]
        
        while stack:
            node, visited = stack.pop()
            if node:
                if visited:
                    result.append(node.val)
                else:
                    stack.append((node, True))
                    if node.right:
                        stack.append((node.right, False))
                    if node.left:
                        stack.append((node.left, False))
        return result
