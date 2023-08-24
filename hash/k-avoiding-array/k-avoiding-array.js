// https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/   (59.1%)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
    
    const result = new Set();

    for (let num = 1; num < n*2; num++) {
        if(result.size === n) break;
        if(!result.has(k - num)) result.add(num)
    }

    return [...result].reduce((acc, curr) => acc + curr, 0)
};

console.log(minimumSum(5, 4))
