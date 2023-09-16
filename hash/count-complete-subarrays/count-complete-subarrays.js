// https://leetcode.com/problems/count-complete-subarrays-in-an-array   (63.7%)

/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    const distinctsArr = [...new Set(nums)];
    let result = 0;

    for (
        let startIndex = 0;
        startIndex <= nums.length - distinctsArr.length;
        startIndex++
    ) {
        const distincts = new Set(distinctsArr);

        let index = startIndex;
        while (index < nums.length && distincts.size) {
            distincts.delete(nums[index]);
            index++;
        }
        if (!distincts.size) {
            result += nums.length - index + 1;
        } else {
            break;
        }
    }

    return result
};

countCompleteSubarrays([1, 3, 1, 2, 2]);
countCompleteSubarrays([5,5,5,5])
