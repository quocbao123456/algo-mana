// https://leetcode.com/problems/count-of-interesting-subarrays/    (30.5%)

/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
    const weights = Array.from({ length: nums.length }, (_, i) =>
        nums[i] % modulo === k ? 1 : 0
    );

    let result = 0,
        prefix = 0;

    const existeds = {};
    for (let offset = 0; offset < nums.length; offset++) {
        existeds[offset] = 0;
    }
    existeds[0] = 1;

    for (const num of weights) {
        prefix = (prefix + num) % modulo;

        result += existeds[prefix - k + (prefix - k < 0 ? modulo : 0)] || 0;
        existeds[prefix] = (existeds[prefix] || 0) + 1;
    }
    console.log(result)
    return result;
};

// countInterestingSubarrays([3, 2, 4], 2, 1);
countInterestingSubarrays([3, 1, 9, 6], 3, 1);

// countInterestingSubarrays([11, 12, 21, 31], 10, 1);
// countInterestingSubarrays([1, 100000], 1000000000, 1);
// countInterestingSubarrays([1000000000], 1000000000, 0);
