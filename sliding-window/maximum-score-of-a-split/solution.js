/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumScore = function (nums) {
    if (nums.length < 2) return 0;

    let startIndex = nums.length - 1;
    let min = Infinity;

    let totalLeft = nums.reduce((acc, curr) => acc += curr);
    let result = totalLeft - min;
    while (startIndex > 0) {
        totalLeft -= nums[startIndex];
        min = Math.min(min, nums[startIndex]);

        result = Math.max(totalLeft - min, result)
        startIndex--;
    }

    return result
};