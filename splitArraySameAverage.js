/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    if(total%2) return false;

    const average = total/2;

    const visiteds = new Map();
    function dp(index, count, len){
        const key = `${index}-${count}-${len}`;

        if(visiteds.has(key)) return visiteds.get(key)
        if(total*len === count*nums.length && len) return true;
        if(index > nums.length - 1) return false;
        if(len === nums.length - 1) return false;
        
        const choose = dp(index + 1, count + nums[index], len + 1);
        const noChoose = dp(index + 1, count, len);

        const result  =choose || noChoose;
        visiteds.set( key, result)

        return result
    }

    return dp(0, 0, 0)
};

console.log(splitArraySameAverage([1,2,3,4,5,6,7,8]))
console.log(splitArraySameAverage([6,8,18,3,1]))

