// https://leetcode.com/problems/house-robber/

// dp no memozie --> not pass
export const rob = function (nums) {
    function dp(index) {
        if (index > nums.length - 1) return 0;

        const choose = dp(index + 2) + nums[index];
        const noChoose = dp(index + 1);

        return Math.max(choose, noChoose);
    }
    return dp(0);
};
// Complexity: O(2^n)
// Mem: O(2^n)


// DP HAVE MEMOZIED
// export const rob = function (nums) {
//     const memozied = new Map();
//     function dp(index) {
//         if (index > nums.length - 1) return 0;
//         if (memozied.has(index)) return memozied.get(index);

//         const choose = dp(index + 2) + nums[index];
//         const noChoose = dp(index + 1);

//         const result = Math.max(choose, noChoose);
//         memozied.set(index, result);

//         return result;
//     }

//     return dp(0);
// };
// // Complexity: O(N)
// // Mem: O(N)


// DP BOTTOM UP
// export const rob = function (nums) {
//     if (nums.length < 2) return nums[0];

//     for (let index = 1; index < nums.length; index++) {
//         const previous = (nums[index - 2] || 0) + nums[index];
//         const previous1 = nums[index - 1];

//         nums[index] = Math.max(previous, previous1);
//     }

//     return nums[nums.length - 1];
// };
// // Complexity: O(N)
// // Mem: O(N)


// DP BOTTOM UP (OPTIMIZED MEMORY)
// export const rob = function (nums) {
//     if (nums.length <= 2) return Math.max(...nums);
//     let previous = 0,
//         previous1 = nums[0];
        
//     for (let index = 1; index < nums.length; index++) {

//         const choose = nums[index] + previous;
//         const noChoose = previous1;

//         const result = Math.max(noChoose, choose);

//         previous = previous1;
//         previous1 = result;
//     }

//     return previous1;
// };
// Complexity: O(N)
// Mem: O(1)


// Refer:   https://leetcode.com/problems/house-robber-ii/
//          https://leetcode.com/problems/house-robber-iii/