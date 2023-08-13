// https://leetcode.com/problems/kth-largest-element-in-an-array    (66.8%)

export const findKthLargest = function (nums, k) {
    function swap( x, y){
        if(x === y) return ;
        const tmp = nums[y];
        nums[y] = nums[x];
        nums[x] = tmp;
    }

    function partition(left, right){
        const pivot = nums[right];
        for (let index = left; index < right; index++) {
            if(nums[index] < pivot){
                swap(index, left);
                left++;
            }
        }

        swap(left, right);
        return left;
    }


    function quickSelect(left, right){
        const pivotIndex = partition(left, right);

        if(pivotIndex === nums.length - k){
            return nums[pivotIndex];
        }
        
        if(pivotIndex > nums.length - k){
            return quickSelect(left, pivotIndex - 1);
        }
        
        if(pivotIndex < nums.length - k){
            return quickSelect(pivotIndex + 1, right);
        }
        return;
    }

    return quickSelect(0, nums.length - 1);
};

// Compexity: O(n) worst case n^2 
// Mem: O(1)

