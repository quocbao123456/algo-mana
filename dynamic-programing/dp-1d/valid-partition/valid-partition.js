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

// export const validPartition = function (nums) {
//     const dp = Array(nums.length).fill(0);

//     function isValid(index) {
//         let result = 0;

//         if (nums[index] === nums[index - 1]) {
//             result = index >= 2 ? dp[index - 2] : 1;
//         }
//         if (result) return true;

//         if (
//             nums[index] === nums[index - 1] &&
//             nums[index] === nums[index - 2]
//         ) {
//             result = index >= 3 ? dp[index - 3] : 1;
//         }
//         if (result) return true;

//         if (
//             nums[index] === nums[index - 1] + 1 &&
//             nums[index] === nums[index - 2] + 2
//         ) {
//             result = index >= 3 ? dp[index - 3] : 1;
//         }

//         return result;
//     }

//     for (let index = 0; index < nums.length; index++) {
//         dp[index] = isValid(index);
//     }

//     return Boolean(dp.pop());
// };

export const validPartition = function (nums) {
    if (nums.length === 1) return false;

    let dp = [true, false, nums.length > 1 && nums[0] === nums[1]];

    for (let index = 2; index < nums.length; index++) {
        let result =
            (nums[index] === nums[index - 1] && dp[1]) ||
            (nums[index] === nums[index - 1] &&
                nums[index] === nums[index - 2] &&
                dp[0]) ||
            (nums[index] === nums[index - 1] + 1 &&
                nums[index] === nums[index - 2] + 2 &&
                dp[0]);

        [dp[0], dp[1], dp[2]] = [dp[1], dp[2], result];
    }

    return dp[2];
};

validPartition([4, 4, 4, 5, 6]);
validPartition([1, 2, 1]);
// validPartition([803201,803201,803201,803201,803202,803203])
