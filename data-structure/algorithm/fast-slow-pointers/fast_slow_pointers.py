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