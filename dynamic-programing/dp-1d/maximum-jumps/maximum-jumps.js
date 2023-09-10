// https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/   (28.7%)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var maximumJumps = function(nums, target) {
//     function findNextStep(index){
//         for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
//             if(Math.abs(nums[nextIndex] - nums[index]) <= target) return nextIndex;
//         }

//         return -1;
//     }

//     let startIndex = 0;
//     let cnt = 0;
//     while(startIndex < nums.length - 1){
//         console.log("startIndex", startIndex, findNextStep(startIndex))
//         startIndex = findNextStep(startIndex);
//         cnt++;
//         if(startIndex === -1) return -1;
//     }

//     return cnt;
// };

var maximumJumps = function (nums, target) {
    const isValid = (x, y) => Math.abs(nums[x] - nums[y]) <= target;
    const memozieds = Array(nums.length).fill(-1);

    function dp(startIndex) {
        if (startIndex === nums.length - 1) return 0;
        if(memozieds[startIndex] !== -1) return memozieds[startIndex]

        let max = -Infinity;
        for (
            let nextIndex = startIndex + 1;
            nextIndex < nums.length;
            nextIndex++
        ) {
            if (isValid(nextIndex, startIndex))
                max = Math.max(1 + dp(nextIndex), max);
        }
        memozieds[startIndex] = max
        return max;
    }

    const result = dp(0);
    return result === -Infinity ? -1 : result
};

console.log(maximumJumps([1, 0, 2], 1))
console.log(maximumJumps( [1,3,6,4,1,2], 2))
console.log(maximumJumps( [1,3,6,4,1,2], 3))
console.log(maximumJumps([1,3,6,4,1,2], 0))

