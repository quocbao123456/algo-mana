/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let total = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if(nums[i] < nums[j] && nums[k] < nums[j]) {
                    console.log(nums[i], nums[j], nums[k])
                    total = Math.min(nums[i] + nums[j] + nums[k], total)
                }
            }
        }
    }
    return total === Infinity ? -1 : total
};

// minimumSum([8,6,1,5,3])
minimumSum([5,4,8,7,10,2])
