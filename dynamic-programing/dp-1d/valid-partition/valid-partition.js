// https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array   (48.7%)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var validPartition = function(nums) {

//     const memozieds = new Map();

//     function isValid(arr){
//         if(arr.length < 2) return false;
//         if(arr.length === 2 && arr[0] === arr[1]) return true;
//         if(arr.length === 3 && arr[0] === arr[1] && arr[1] === arr[2]) return true;
//         if(arr.length === 3 && arr[1] === arr[0] + 1 && arr[2] === arr[1] + 1) return true;

//         return false;
//     }

//     function dp(index, tmp){
//         if(tmp.length > 3) return false;
//         if(index === nums.length) return isValid(tmp);
//         if(memozieds.has(`${index}-${tmp.toString()}`)) {
//             console.log(index, tmp)
//             return memozieds.get(`${index}-${tmp.toString()}`)}

//         if(!isValid(tmp)){
//             return dp(index + 1, [...tmp, nums[index]]);
//         }

//         const choose = dp(index + 1, [...tmp, nums[index]]);
//         const noChoose = dp(index + 1, [nums[index]]);
//         const result = choose || noChoose

//         memozieds.set(`${index}-${tmp.toString()}`, result)

//         return result
//     }

//     return dp(0, [])
// };

export const validPartition = function (nums) {
    const dp = Array(nums.length).fill(0);

    function isValid(index) {
        let result = 0;

        if (nums[index] === nums[index - 1]) {
            result = index >= 2 ? dp[index - 2] : 1;
        }
        if (result) return true;

        if (
            nums[index] === nums[index - 1] &&
            nums[index] === nums[index - 2]
        ) {
            result = index >= 3 ? dp[index - 3] : 1;
        }
        if (result) return true;

        if (
            nums[index] === nums[index - 1] + 1 &&
            nums[index] === nums[index - 2] + 2
        ) {
            result = index >= 3 ? dp[index - 3] : 1;
        }

        return result;
    }

    for (let index = 0; index < nums.length; index++) {
        dp[index] = isValid(index);
    }

    return Boolean(dp.pop());
};
