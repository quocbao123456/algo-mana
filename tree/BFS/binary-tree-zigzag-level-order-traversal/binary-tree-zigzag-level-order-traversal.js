// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal   (57.6%)

var zigzagLevelOrder = function(root) {
    if(!root) return []
    const result = []
    let queue = [root];
    let flag = false;

    while(queue.length){
        const vals = queue.map((item) => item.val);
        if(flag) {
            vals.reverse()
        }
        result.push(vals)

        const tmp = []
        while(queue.length){
            const node = queue.shift();
            node.left && tmp.push(node.left);
            node.right && tmp.push(node.right);
        }   
        queue = tmp
        flag = !flag;
    }

    return result;
};