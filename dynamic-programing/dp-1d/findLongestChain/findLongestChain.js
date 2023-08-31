/**
// https://leetcode.com/problems/maximum-length-of-pair-chain/  (59.4%) 

* @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    if (pairs.length < 2) return pairs.length;
    pairs.sort((a,b) => a[0] - b[0])
    const memozieds = Array.from({length: pairs.length}, () => Array.from({length: 2001}, () => 0));

    function dp(index, start) {
        if (index >= pairs.length) return 0;
        if(memozieds[index][start]) return memozieds[index][start];
        const curr = pairs[index];

        const noChoose = dp(index + 1, start);
        const choose = start >= curr[0] ? -Infinity : 1 + dp(index + 1, curr[1]);

        const result = Math.max(choose, noChoose);
        memozieds[index][start] = result;

        return result
    }

    return dp(0, -Infinity);
};

var findLongestChain = function (pairs) {
    if (pairs.length < 2) return pairs.length;
    pairs.sort((a,b) => a[1] - b[1])

    let end = -Infinity;
    const result = [];

    for (const p of pairs) {
        if(p[0] > end){
            result.push(p);
            end = p[1];
        }
    }
    return result.length
};

// findLongestChain([
//     [0, 1],
//     [1, 2],
//     [4, 9],
//     [7, 8],
//     [9, 10],
// ]);
console.log(findLongestChain([
    [3, -8],
    [-3, 9],
    [-5, 0],
    [6, 10],
    [-16, -4],
    [1, 7],
    [9, 10],
    [-4, 7],
]))
