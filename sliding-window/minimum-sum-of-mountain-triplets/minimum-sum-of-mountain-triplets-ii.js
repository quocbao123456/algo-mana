/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
    if(nums.length < 3) return -1;

    const memoizeds = Array.from({ length: nums.length }, () => Infinity);
    let result = Infinity;

    // Track 2 first candidates 
    let candidate1 = Infinity;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > candidate1) {
            memoizeds[index] = nums[index] + candidate1;
        }
        candidate1 = Math.min(candidate1, nums[index])
    }

    // Track last candidate
    let candidate3 = Infinity;
    for (let index = nums.length - 1; index >= 0; index--) {
        if(nums[index] > candidate3){
            result = Math.min(memoizeds[index] + candidate3, result);
        }
        candidate3 = Math.min(candidate3, nums[index])
    }
  
    return result === Infinity ? -1 : result;
};

minimumSum([5, 4, 8, 7, 10, 2]);
minimumSum([8, 6, 1, 5, 3]);
minimumSum([6,5,4,3,4,5]);
