// https://leetcode.com/problems/delete-nodes-and-return-forest  (69.2%)
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const deletes = new Set(to_delete)
    const result = []
    function dfs(node, flag){ 
        const removed = deletes.has(node.val);

        node.left && dfs(node.left, removed);
        node.right && dfs(node.right, removed);

        if(node.left && deletes.has(node.left.val)) node.left = null;
        
        if(node.right && deletes.has(node.right.val)) node.right = null;

        if(!removed && flag) result.push(node)
    }

    dfs(root, true);
    return result;
};