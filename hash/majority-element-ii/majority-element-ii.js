// https://leetcode.com/problems/majority-element-ii    (46.4%)

export const majorityElement = function(nums) {
    if(nums.length < 3) return [...new Set(nums)];
    
    const limit = Math.floor(nums.length/3);
    const result = []

    const freq = new Map();

    for (const num of nums) {
        if(freq.get(num) > limit) continue;

        const newFreq = (freq.get(num) || 0) + 1;
        freq.set(num, newFreq);
        if(newFreq > limit){
            result.push(num)
        }
    }

    return result;
};

// Complexity: N
// Mem: N

// --> If want optimize mem --> We have algorihtm Boyer Vote

// --> Idea: If freq > n/3 --> only have max 2 element

// --> Loop 2 round: 1st round to get all able candidate, 2nd to filter freq

// var majorityElement = function(nums) {
//     let candidate1;
//     let candidate2;
//     let count1 = 0;
//     let count2 = 0;
    
//     for (let num of nums) {
//         if (candidate1 === num) {
//             count1++;
//         } else if (candidate2 === num) {
//             count2++;
//         } else if (count1 === 0) {
//             candidate1 = num;
//             count1 = 1;
//         } else if (count2 === 0) {
//             candidate2 = num;
//             count2 = 1;
//         } else {
//             count1--;
//             count2--;
//         }
//     }

//     count1 = 0;
//     count2 = 0;
    
//     for (let num of nums) {
//         if (num === candidate1) {
//             count1++;
//         } else if (num === candidate2) {
//             count2++;
//         }
//     }

//     const result = [];
//     if (count1 > Math.floor(nums.length / 3)) {
//         result.push(candidate1);
//     }
//     if (count2 > Math.floor(nums.length / 3)) {
//         result.push(candidate2);
//     }

//     return result;
// };

