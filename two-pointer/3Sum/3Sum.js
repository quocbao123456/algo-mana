// https://leetcode.com/problems/3sum/  (33.0%)

export const threeSum = function (nums) {
    nums.sort((a,b) => a - b);
    //  [-4, -1, -1, 0, 1, 2]
    const result = [];

    for (let pivotIndex = 0; pivotIndex < nums.length - 2; pivotIndex++) {
        if(pivotIndex > 0 && nums[pivotIndex] === nums[pivotIndex - 1]){
            // duplicate start number
            continue;
        }

        let left = pivotIndex + 1;
        let right = nums.length - 1;

        // this step can optimized below
        while(left < right){
            const total = nums[pivotIndex] + nums[left] + nums[right];
            if(total === 0){
                result.push([nums[pivotIndex], nums[left], nums[right]])

                left++;
                right--;
                while (nums[left] === nums[left - 1]) left++;
                while (nums[right] === nums[right + 1]) right--;

                continue;
            }
            
            if(total > 0){
                right --;
            }else{
                left++;
            }
        }
    }
    return result;
};

// Sorted: O(NLogN) --> don't effect performance of main process
// Sorted --> Can avoid less duplicated 

// Complexity: O(NLogN)
// Mem: O(NLogN)