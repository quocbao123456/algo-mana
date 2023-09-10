// https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/ (36.2%)

/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {
    let startIndex = 0;
    let sum = 0;
    let max = 0;
    const freqs = new Map();
    function moveStart() {
        const startElement = nums[startIndex];
        startIndex++;

        freqs.set(startElement, freqs.get(startElement) - 1);
        if (freqs.get(startElement) === 0) freqs.delete(startElement);

        sum -= startElement;
    }

    for (let index = 0; index < nums.length; index++) {
        const curr = nums[index];
        freqs.set(curr, (freqs.get(curr) || 0) + 1);
        sum += curr;

        if (index - startIndex + 1 === k) {
            if (freqs.size >= m) max = Math.max(max, sum);
            moveStart();
        }
    }   
    return max
};

maxSum([5, 9, 9, 2, 4, 5, 4], 1, 3);
maxSum([2,6,7,3,1,7], 3, 4);
maxSum([1,2,1,2,1,2,1], 3, 3);
maxSum([1],1,1);

