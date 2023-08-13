// https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/  (40.5%)

// export const minimizeMax = function(nums, p) {
//     if(!p) return 0;
//     nums.sort((a, b) => a - b);
//     const memozieds = {};
    
//     function dp(index, target){
//         if(target === 0) return 0;
//         if(index >= nums.length - 1 || target > nums.length - index + 1){
//             return Infinity;
//         }

//         if(memozieds[`${index}-${target}`] !== undefined) return memozieds[`${index}-${target}`]

//         const choose = Math.max(dp(index + 2, target - 1), Math.abs(nums[index]-nums[index+1]));
//         const noChoose = dp(index + 1, target);
//         const result = Math.min(choose, noChoose)

//         memozieds[`${index}-${target}`] = result;
//         return result;
//     }
//     return dp(0, p)
// };


// Complexity: N^2
// Mem: N^2

// FAILED: 1574 / 1582  --> overflow memory
// Must find another way

export const minimizeMax = function(nums, p) {
    if(!p) return 0;
    nums.sort((a, b) => a - b);

    function isValid(distance, target){
        let startIndex = 0;
        while(startIndex < nums.length){
            if(nums[startIndex + 1] - nums[startIndex] <= distance){
                startIndex += 2;
                target--;
                if(!target) return true;
            }else{
                startIndex += 1;
            }
        }

        return !target;
    }

    let low = 0;
    let high = nums[nums.length - 1] - nums[0];

    while(low < high){
        let mid = Math.floor((high + low)/2);

        if(!isValid(mid, p)){
            low = mid + 1;
        }else{
            high = mid;
        }
    }
    return low
};

// Complexity: NlogN
// Mem: NlogN




