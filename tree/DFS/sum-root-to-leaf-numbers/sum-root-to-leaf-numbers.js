// https://leetcode.com/problems/sum-root-to-leaf-numbers  (61.6%)

const sumNumbers = function (root) {
    if(!root) return 0;
    let result = 0;

    function dfs(str, node){
        if(!node.left && !node.right) {
            result += Number(str);
            return
        }
        
        node.left && dfs(str + String(node.left.val), node.left);
        node.right && dfs(str + String(node.right.val), node.right);

    }

    dfs(String(root.val), root);
   
   return result;
};

// Complexity: O(2^N)
// Mem: O(1)

