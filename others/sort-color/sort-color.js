// https://leetcode.com/problems/sort-colors    (59.8%)


// Implement a 0(N) solution

// --> Dutch national flag problem
const PIVOT = 1;

export const sortColors = function (nums) {
    function swap(x, y){
        const tmp = nums[x];
        nums[x] = nums[y];
        nums[y] = tmp;
    }

    let startIndex = 0;
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] < PIVOT){
            if(index !== 0){
                swap(index, startIndex);
            }
            startIndex++;
        }
    }

    let endIndex = nums.length - 1;
    for (let index = nums.length - 1; index >= 0; index--) {
        if(nums[index] > PIVOT){
            if(index !== nums.length - 1){
                swap(index, endIndex);
            }
            endIndex--;
        }
    }

    return nums
};

// Complexity: N
// Mem: 1

// sortColors([2,0,2,1,1,0])
sortColors([2,1])