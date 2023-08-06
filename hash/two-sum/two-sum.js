// https://leetcode.com/problems/two-sum/    (50.4%)

export const twoSum = function (nums, target) {
    const values = new Map();

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (values.has(target - element))
            return [values.get(target - element), index];

        values.set(element, index);
    }

    return false;
};

// Complexity: N
// Mem: 1