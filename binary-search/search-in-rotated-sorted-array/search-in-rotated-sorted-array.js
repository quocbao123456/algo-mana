// https://leetcode.com/problems/search-in-rotated-sorted-array/    (39.8%)
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    function notIn(i, j){
        const sorted = nums[i] < nums[j];

        if(target < nums[i] && target > nums[j]) return true;

        if(sorted && target < nums[i] && target < nums[j]) return true;
        if(sorted && target > nums[i] && target > nums[j]) return true;

        return false;
    }

    while(left < right){
        console.log("left", left, right)
        const mid = Math.floor((right + left)/2);

        if(nums[left] === target) return left;
        if(nums[right] === target) return right;
        if(nums[mid] === target) return mid;

        if(notIn(left, mid)){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return nums[left] === target ? left : -1;
};

search([4,5,6,7,0,1,2], 3)
search([1], 0)
search([1, 3], 1)
search([1, 3], 3)
search([5,1,2,3,4], 1)

// Complexity: O(logN)
// Mem: O(logN)
