// https://leetcode.com/problems/next-greater-element-ii/   (63.4%)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const stack = [];
    const result = [];
    const len = nums.length;

    for (let index = len*2 - 1; index >= 0; index--) {
        const curr = nums[index%len];
        while (stack[stack.length - 1] <= curr) {
            stack.pop();
        }
        result[index%len] = !stack.length ? -1 : stack[stack.length - 1]
        stack.push(curr);
    }

    return result
};

nextGreaterElements([1, 4, 2, 1, 3]);
