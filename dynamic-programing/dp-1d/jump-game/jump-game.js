// https://leetcode.com/problems/jump-game/  (38.7%)

// export const canJump = function (nums) {
//     if (nums.length <= 1) return true;
//     let currIndex = 0;

//     while (nums[currIndex]  || currIndex !== nums.length - 1) {
//         if (nums[currIndex] >= nums.length - currIndex - 1) {
//             return true;
//         }

//         let max = -Infinity;
//         let nextStep;

//         for (let i = currIndex + 1; i < currIndex + nums[currIndex] + 1; i++) {
//             if(nums[i] + i >= max){
//                 nextStep = i;
//                 max = nums[i] + i;
//             }           
//         }
//         if(!nextStep) return false;
//         currIndex = nextStep;
//     }
//     return false;
// };

// Complexity: O(M*N) worst case 
// Mem: O(M*N)


// Let optimize it with Kadane algorithm
export const canJump = function (nums) {
    if (nums.length <= 1) return true;
    let maxJump = 0;

    for (let index = 0; index < nums.length; index++) {

        if(maxJump < index) return false;
        
        // caculate max jump index at this index
        let max = nums[index] + index;

        // update global max jump
        maxJump = Math.max(maxJump, max)
    }

    return true;
};

// Complexity: O(N)
// Mem: O(1)
