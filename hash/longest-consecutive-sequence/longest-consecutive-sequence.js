// https://leetcode.com/problems/longest-consecutive-sequence/    (47.7%)

export const longestConsecutive = function(nums) {
    const vals = new Set(nums);
    let max = 0;
    let maxLocal = 0;

    function expand(num){
        if(!vals.size) return;
        vals.delete(num)
        maxLocal++;
        while(vals.has(num + 1) || vals.has(num - 1)){
            if(vals.has(num + 1)){
                expand(num + 1)
            }
            if(vals.has(num - 1)){
                expand(num - 1)
            }
        }
    }

    while(vals.size){
        for (const num of nums) {
            expand(num);
            
            max = Math.max(max, maxLocal)
            maxLocal = 0;
        }
    }

    return max;
};

// Complexity: N
// Mem: N