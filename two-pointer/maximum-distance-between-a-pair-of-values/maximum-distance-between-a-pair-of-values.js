// https://leetcode.com/problems/maximum-distance-between-a-pair-of-values  (53.4%)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
    let left1 = 0,
        left2 = 0,
        result = 0;

    while (left1 < nums1.length && left2 < nums2.length) {
        const el1 = nums1[left1],
            el2 = nums2[left2];

        if (el2 >= el1) {
            result = Math.max(left2 - left1, result);
            left2++;
        } else {
            left1++;
        }
    }

    return result;
};
console.log(maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]));

// console.log(
//     maxDistance(
//         [9820, 8937, 7936, 4855, 4830, 4122, 2327, 1342, 1167, 815, 414],
//         [
//             9889, 9817, 9800, 9777, 9670, 9646, 9304, 8977, 8974, 8802, 8626,
//             8622, 8456,
//         ]
//     )
// );

// console.log(maxDistance([2, 2, 2], [10, 10, 1]));
