// https://leetcode.com/problems/binary-tree-level-order-traversal-ii  (61.8%)

const levelOrderBottom = function (root) {
    if(!root) return [];
    const result = []
    let queue = [root];

    while(queue.length){
        result.unshift(queue.map(item => item.val));

        const nextLevel = []
        while(queue.length){
            const nextNode = queue.shift();
            nextNode.left && nextLevel.push(nextNode.left);
            nextNode.right && nextLevel.push(nextNode.right);
        }
        queue = nextLevel;
    }
    return result;
};

// Complexity: O(2^N)
// Mem: O(N)
