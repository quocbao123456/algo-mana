// https://leetcode.com/problems/unique-binary-search-trees (60.2%)
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const memozieds = {}
    function dp(sum) {
        if (sum <= 1) return 1;
        if (memozieds[sum]) return memozieds[sum];

        let result = 0;
        for (let k = 0; k < sum; k++) {
            result += dp(k) * dp(sum - k - 1);
        }

        memozieds[sum] = result

        return result;
    }

    return dp(n);
};

console.log(numTrees(3));
console.log(numTrees(4));
