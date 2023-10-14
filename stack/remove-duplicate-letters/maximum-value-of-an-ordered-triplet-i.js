/**
 * @param {number[]} nums
 * @return {number}
 */
// var maximumTripletValue = function(nums) {
//     let result = 0;
    
//     for(let i = 0; i < nums.length - 2; i++){
//         for(let j = i + 1; j < nums.length - 1; j++){
//             for(let k = j + 1; k < nums.length; k++){
//                 result = Math.max((nums[i] - nums[j])*nums[k], result)
//             }
//         }
//     }
//     return result
// };

var maximumTripletValue = function(nums) {
    if(nums.length < 3) return 0;

    let candidate1 = -Infinity, candidate12 = -Infinity, result = 0;

    for (let index = 0; index < nums.length; index++) {
        const curr = nums[index];
        candidate1 = Math.max(candidate1, curr)
        result = Math.max(result, candidate12 * curr)
        candidate12 = Math.max(candidate12, candidate1 - curr)
 
    }
    return result
};


maximumTripletValue([12,6,1,2,7])
maximumTripletValue([2,3,1])
maximumTripletValue([10,13,6,2])