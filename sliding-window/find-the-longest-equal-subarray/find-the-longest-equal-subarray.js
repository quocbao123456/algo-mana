// https://leetcode.com/problems/find-the-longest-equal-subarray/   (32.9%)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestEqualSubarray = function (nums, k) {
    if (!nums.length) return 0;

    const freqs = new Array(nums.length).fill(0);

    let i = 0, j = 0;
    let result = 0;

    while(j < nums.length){
        freqs[nums[j]] = (freqs[nums[j]] || 0) + 1;

        result = Math.max(freqs[nums[j]], result);

        if(j - i + 1 - result > k){
            freqs[nums[i]]--;
            i++;
        }
        j++;
    }
    return result;
};

// console.log(longestEqualSubarray([4,2,4], 0))
console.log(longestEqualSubarray([4,4,4,3,4], 1))

// console.log(longestEqualSubarray([3,1,5,3,1,1] , 0))

// console.log(longestEqualSubarray([1, 3, 2, 3, 1, 3], 3))


// console.log(longestEqualSubarray([4,4,2,2,4], 1))
// console.log(longestEqualSubarray([2, 2, 3], 0))

// console.log(longestEqualSubarray([1, 3, 2, 3, 1, 3, 5], 2));

// console.log(longestEqualSubarray([1,1,2,2,1,1]    , 2))