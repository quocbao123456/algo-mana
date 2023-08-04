
// https://leetcode.com/problems/house-robber-ii/   (41.3%)
var rob2 = function (nums) {

    function dp(index, chooseFirst){
        if(index >= nums.length) return 0;
        if(index >= nums.length - 1 && chooseFirst) return 0;

        const noChoose = dp(index + 1, chooseFirst);
        const choose = dp(index + 2, chooseFirst) + nums[index];

        const result = Math.max(noChoose, choose);
        return result
    }

    return Math.max(dp(1, false), nums[0] + dp(2, true))
};

// https://leetcode.com/problems/house-robber-iii/  (54.0%)
var rob3 = function(root) {
    const memozieds = new Map();

    function dp(node){
        if(!node) return 0;
        if(memozieds.has(node)){
            return memozieds.get(node)
        }

        // choose curr node
        let choose = node.val;
        if(node.left) choose += dp(node.left.left) + dp(node.left.right);
        if(node.right) choose += dp(node.right.left) + dp(node.right.right);

        // no choose this node
        let noChoose = dp(node.left) + dp(node.right)

        const result = Math.max(choose, noChoose);
        memozieds.set(node, result)

        return result
    }

    return dp(root);
};
