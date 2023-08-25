// https://leetcode.com/problems/path-sum-iii/description/  (47.3%)

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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;
    let result = 0;

    function dfs(node, params){
        if(!node) return;
        if(node.val === targetSum) result++;

        for (let index = 0; index < params.length; index++) {
            params[index] += node.val;
            if(params[index] === targetSum) result++;
        }

        params.push(node.val);

        node.left && dfs(node.left, [...params])
        node.right && dfs(node.right, [...params])
    }
    
    dfs(root, [])

    return result;
};
