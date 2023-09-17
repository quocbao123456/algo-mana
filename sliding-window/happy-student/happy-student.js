// https://leetcode.com/problems/happy-students (44.0%)

/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function (nums) {
    nums.sort((a, b) => a - b);
    let result = nums[0] > 0 ? 1 : 0;

    for (let index = 0; index < nums.length; index++) {
        const curr =  nums[index];
        const next = index < nums.length - 1 ? nums[index + 1] : Infinity;

        if (index + 1 > curr && index + 1 < next) {
            result++;
        }
    }

    return result
};

countWays([6, 0, 3, 3, 6, 7, 2, 7]);
countWays([1, 1]);
countWays([1,1,0,1]);
countWays([0,4,4,4,4,4,2]);
