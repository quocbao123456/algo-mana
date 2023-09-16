// https://leetcode.com/problems/sum-of-distances/description/  (30.1%)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const freqs = new Map();
    const result = new Array(nums.length).fill(0);
    
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if(!freqs.has(num)) {
            freqs.set(num, [index])
        }else{
            freqs.get(num).push(index);
        }
    }


    function solve(x){
        const arr = freqs.get(x);

        let total = 0;
        for (let index = 0; index < arr.length; index++) {
            total += arr[index] - arr[0];
        }

        result[arr[0]] = total;

        for (let index = 1; index < arr.length; index++) {
            total += (arr[index] - arr[index - 1])*(index - 1);
            total -= (arr[index] - arr[index - 1])*(arr.length - 1 - index);
            result[arr[index]] = total;
        }
    }

    for (const key of freqs.keys()) {
        solve(key)
    }
    return result
};

distance( [1,3,1,1,2])