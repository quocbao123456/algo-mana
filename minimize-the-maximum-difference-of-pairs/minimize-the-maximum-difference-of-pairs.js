// https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/  (40.5%)

export const minimizeMax = function(nums, p) {
    if(!p) return 0;
    
    nums.sort((a, b) => a - b);
    const candidates = [];

    for (let index = 0; index < nums.length - 1; index++) {
        candidates.push(nums[index + 1] - nums[index]);
    }

    candidates.sort((a,b) => a - b)
    return Math.max(...candidates.slice(0, p));
};

console.log(minimizeMax([10,1,2,7,1,3], 2))
console.log(minimizeMax([0,5,3,4], 0))



// Complexity: N
// Mem: N


