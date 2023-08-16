// https://leetcode.com/problems/container-with-most-water/  (54.1%)

export const maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let result = -Infinity;
    function caculate(x, y) {
        return Math.min(height[x], height[y]) * Math.abs(y - x);
    }

    while (left < right) {
        result = Math.max(result, caculate(left, right))

        if(height[left] < height[right]){
            left++;
        }else{
            right--
        }

    }

    return result;
};

// Complexity: O(N)
// Mem: O(N)
