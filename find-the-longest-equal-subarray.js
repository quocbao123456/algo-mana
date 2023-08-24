/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function (nums, k) {
    if(k === 0){
        if(!nums.length) return 0;
        let max = 1;
        let result = 1;
        for (let index = 1; index < nums.length; index++) {
            if(nums[index] === nums[index - 1]) {
                result++;
                max = Math.max(result, max)
            }else{
                result = 1;
            }
        }
        return max
    }

    function dp(lastElement, index, k, visiteds) {

        if (index === nums.length || k < 0){
            return 0;
        }

        const curr = nums[index];
        const choose = (curr === lastElement ? 1 : 0) + dp(curr, index + 1, k, [...visiteds, curr]);

        let noChoose = -Infinity;
        if(k > 0){
            noChoose = dp(lastElement, index + 1, k - 1, visiteds);
        }

        console.log("choose", choose, [...visiteds, curr], k)

        return Math.max(choose, noChoose)
    }
    return dp(null, 0, k, []);
};
// console.log(longestEqualSubarray([4,4,2,2,4], 1))
// console.log(longestEqualSubarray([2, 2, 3], 0))

console.log(longestEqualSubarray(
    [1,3,2,3,1,3,5],
  2
))

// longestEqualSubarray(
//     [
//         5, 1, 20, 16, 23, 19, 22, 4, 16, 15, 8, 18, 1, 16, 8, 7, 8, 12, 23, 4,
//         23, 5, 22,
//     ],
//     3
// );

// longestEqualSubarray(
//     [1,1,2,2,1,1],
//    2
// );
// console.log(longestEqualSubarray(
//     [7,9,3,1,2,10,7,2,1,2,2,4,7,10,2,6,8,3,10,9,3,1,6,7],
//    24
// ))




// console.log(longestEqualSubarray(
//     [4,6,2,8,9,2,4,3,8,3,10,6,4,4,4,3,2,1,9,4,2,1,1,3,10],
//    16
// ))




