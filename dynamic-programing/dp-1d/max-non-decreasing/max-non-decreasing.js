// https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/   (26.6%)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var maxNonDecreasingLength = function (nums1, nums2) {
    let dp1 = 1
    let dp2 = 1

    let result = 1;

    for (let index = 1; index < nums1.length; index++) {

        // choose nums 1's list
        const dp11 = nums1[index] >= nums1[index - 1] ? dp1 + 1 : 1;
        const dp21 = nums1[index] >= nums2[index - 1] ? dp2 + 1 : 1;

        // choose nums 2's list
        const dp12 = nums2[index] >= nums1[index - 1] ? dp1 + 1 : 1;
        const dp22 = nums2[index] >= nums2[index - 1] ? dp2 + 1 : 1;

        dp1 = Math.max(dp11, dp21)
        dp2 = Math.max(dp12, dp22)
        
        result = Math.max(result, dp1, dp2)
    }

    return result
};

// console.log(maxNonDecreasingLength([1, 3, 2, 1], [2, 2, 3, 4]));
// console.log(maxNonDecreasingLength([2, 3, 1], [1, 2, 1]));
// console.log(maxNonDecreasingLength([1, 3, 2, 1], [2, 2, 3, 4]));
// console.log(maxNonDecreasingLength([19, 3, 18, 5, 12], [5, 17, 3, 14, 16]));
// console.log(maxNonDecreasingLength([94, 83, 94, 43, 94], [97, 94, 30, 94, 75]));
// console.log(maxNonDecreasingLength([11, 7, 7, 9], [19, 19, 1, 7]));

// console.log(maxNonDecreasingLength([19, 3, 18, 5, 12], [5, 17, 3, 14, 16]));

// console.log(maxNonDecreasingLength([11, 15, 9, 20, 6], [15, 2, 11, 19, 16]));

console.log(maxNonDecreasingLength([8, 14, 4, 12, 9, 5], [7, 4, 20, 9, 19, 9]));
