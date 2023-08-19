// https://leetcode.com/problems/longest-mountain-in-array  (40.2%)
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {

    function considerPeak(index){
        const peak = arr[index];

        if(arr[index + 1] >= peak || arr[index - 1] >= peak) return 0;

        let left = index - 1;
        let right = index + 1;
        let count = 1;

        while(arr[left] < arr[left + 1]){
            count++;
            left--;
            if(left < 0) break;
        }

        while(arr[right] < arr[right - 1]){
            count++;
            right++;

            if(right === arr.length) break;
        }

        return count;
    }

    let result = 0;
    for (let index = 1; index < arr.length - 1; index++) {
        result = Math.max(result, considerPeak(index))
    }
    return result
};
