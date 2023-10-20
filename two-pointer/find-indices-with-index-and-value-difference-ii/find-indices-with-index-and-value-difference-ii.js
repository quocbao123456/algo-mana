// https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii    (25.7%)

/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
// var findIndices = function(nums, indexDifference, valueDifference) {
//     function isValid(x, y){
//         return y - x >= indexDifference && Math.abs(nums[y] - nums[x]) >= valueDifference
//     }
//     let result = [-1, -1];
//     const visiteds = new Set()

//     function dp(x, y){
//         if(visiteds.has(`${x}-${y}`)) return
//         if(result[0] !== -1) return;
//         if(y - x < indexDifference) return
//         if(isValid(x, y)) {
//             result = [x, y]
//             return
//         }
//         visiteds.add(`${x}-${y}`)

//         dp(x + 1, y)
//         dp(x, y - 1)
//     }

//     dp(0, nums.length - 1)
//     return result
// };

var findIndices = function(nums, indexDifference, valueDifference) {
    let minIndex = 0, maxIndex = 0
    function updateMinMax(index){
        if(nums[index] < nums[minIndex]) minIndex = index;
        if(nums[index] > nums[maxIndex]) maxIndex = index;
    }

    for (let index = indexDifference; index < nums.length; index++) {
        updateMinMax(index - indexDifference);
        if(nums[index] - nums[minIndex] >= valueDifference) return [minIndex, index];
        if(nums[maxIndex] - nums[index] >= valueDifference) return [maxIndex, index];
    }

    return [-1, -1]
};
console.log(findIndices([2,0,9,2], 2, 4))
console.log(findIndices([5,1,4,1], 2, 4))