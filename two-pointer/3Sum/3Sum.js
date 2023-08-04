// https://leetcode.com/problems/3sum/  (33.0%)

export const threeSum = function (nums) {
    nums.sort((a,b) => a - b);
    //  [-4, -1, -1, 0, 1, 2]
    const result = [];
    const setResult = new Set();

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
                const resultStr = [nums[pivotIndex], nums[left], nums[right]].toString();
                if(!setResult.has(resultStr)){
                    setResult.add(resultStr)
                    result.push([nums[pivotIndex], nums[left], nums[right]])
                }
               
                left++;
                right--;
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

Sorted: O(NLogN) --> don't effect performance of main process
Sorted --> Can avoid less duplicated 

Complexity: O(NLogN)
Mem: O(NLogN)

This way comparatively good for performance


// // 2 Pointer (Optimized with binary search)
// export const threeSum = function (nums) {
//     nums.sort((a,b) => a - b);
//     //  [-4, -1, -1, 0, 1, 2]
//     const result = [];
//     const setResult = new Set();

//     for (let pivotIndex = 0; pivotIndex < nums.length - 2; pivotIndex++) {
//         if(pivotIndex > 0 && nums[pivotIndex] === nums[pivotIndex - 1]){
//             // duplicate start number
//             continue;
//         }

//         let left = pivotIndex + 1;
//         let right = nums.length - 1;

//         while(left < right){

//             // pivot middle point
//             const mid = Math.floor((right - left)/2) + left;


//         }
        
//     }
//     return result;
// };

threeSum([-1,0,1,2,-1,-4]) // --> [[-1,-1,2],[-1,0,1]]
threeSum([-2,0,0,2,2]) // --> [[-1,-1,2],[-1,0,1]]