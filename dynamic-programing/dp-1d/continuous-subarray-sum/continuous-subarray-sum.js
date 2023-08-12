// https://leetcode.com/problems/continuous-subarray-sum/  (28.5%)


// First let put eyes on it with Brute force
var checkSubarraySum = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if(sum%k === 0)  return true;
        }
    }

    return false;
};

// FAIL: 95/98 test case
// Complexity: O(N^2)
// Mem: O(N^2)

// Let find the other way
// var checkSubarraySum = function(nums, k) {

//     function dp(index, offset, count){
//         if(index > nums.length) return false;
//         if(offset%k === 0 && count >= 2) {
//             return true;
//         }

//         const choose = dp(index + 1, offset + nums[index], count + 1);

//         const choose1 = dp(index + 1, nums[index], 1);

//         const noChoose = dp(index + 1, 0, 0)

//         return choose || noChoose || choose1;
//     }

//     return dp(0, 0, 0);
// };

// --> TIMEOUT

// Let find the other way
var checkSubarraySum = function(nums, k) {
    if(nums.length < 2) return false;
    const memozieds = new Map();

    function dp(index, offset, count){
        if(index > nums.length) return false;

        if(offset=== 0 && count >= 2) {
            return true;
        }
        if(memozieds.has(`${index},${offset},${count}`)) return memozieds.get(`${index},${offset},${count}`);

        // don't care count > 2
        // only care mod of k
        const choose = dp(index + 1, (offset + nums[index])%k, count + 1 >= 2 ? 2 : count + 1);

        const choose1 = dp(index + 1, nums[index]%k, 1);

        const noChoose = dp(index + 1, 0, 0)

        const result = choose || noChoose || choose1
        memozieds.set(`${index},${offset},${count}`, result)

        return result;
    }

    return dp(0, 0, 0);

};


// This way better for performance
// BUT also see input 
// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^9
// 0 <= sum(nums[i]) <= 2^31 - 1
// 1 <= k <= 2^31 - 1

// --> Mem complexity of this way so large

// dp(index, offset, count)
// count <= 2
// 0 < offset < 2^31 - 1
// 0 < index < 10^5
// --> mem of dp object so big


// LET FIND THE OTHER WAY AGAIN!

// checkSubarraySum([23,2,4,6,7], 6)
// checkSubarraySum([23,2,6,4,7], 13)
// checkSubarraySum([0,0], 1)
// checkSubarraySum([1,0], 2)
checkSubarraySum([5,6,2,5,7,0,7,4,1,6,9,5,0,8,2,1,2,0,9,8,1,7,8], 4)




