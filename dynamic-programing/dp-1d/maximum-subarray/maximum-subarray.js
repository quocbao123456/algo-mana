// https://leetcode.com/problems/maximum-subarray  (50.3%)

// export const maxSubArray = function (nums) {
//     if(!nums.length) return 0;
//     let result = nums[0];
//     let count = 0;

//     for (let index = 0; index < nums.length; index++) {
//         count += nums[index];
//         result = Math.max(count, result);
//         if(count < 0){
//             count = 0;
//         }
//     }

//     return result;
// };

// Complexity: O(N)
// Mem: O(1)


// Let use a other algorithm: Kadane

const maxSubArray = function (nums) {
    if(!nums.length) return 0;
    let globalMax = nums[0];
    let localMax = 0;

    for (let index = 0; index < nums.length; index++) {
        localMax = Math.max(nums[index] + localMax, nums[index]);
        globalMax = Math.max(localMax, globalMax);
    }

    return globalMax;
};
// Complexity: O(N)
// Mem: O(1)
