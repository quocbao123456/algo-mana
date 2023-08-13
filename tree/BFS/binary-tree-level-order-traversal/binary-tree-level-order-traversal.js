// https://leetcode.com/problems/binary-tree-level-order-traversal/   (65.3%)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    const result = []
    
    let queue = [root];
    while(queue.length){
        const vals = queue.map(item => item.val);
        result.push(vals)
        const tmp = [];
        while(queue.length){
            const node = queue.shift();

            node.left && tmp.push(node.left);
            node.right && tmp.push(node.right);
            
        }
        queue = tmp;
    }
    return result
};