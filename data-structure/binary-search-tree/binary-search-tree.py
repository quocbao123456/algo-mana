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
        if root is None or self.val == target:
            return root
    
        if self.val < target:
            return self.search(root.right, target)
    
        return self.search(root.left, target)

    def preorder(self):
        if self.val is not None:
            print(self.val)
        if self.left is not None:
            self.left.preorder()
        if self.right is not None:
            self.right.preorder()

    def inorder(self):
        if self.left is not None:
            self.left.inorder()
        if self.val is not None:
            print(self.val)
        if self.right is not None:
            self.right.inorder()

    def postorder(self):
        if self.left is not None:
            self.left.postorder()
        if self.right is not None:
            self.right.postorder()
        if self.val is not None:
            print(self.val)
root = BSTNode(3)
root.insert(5)
root.insert(1)
root.insert(10)

# print(root.min())
# print(root.max())

root.preorder()
root.inorder()
root.postorder()

