/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    const arr = [];

    for (const pair of nums) {
        const [start, end] = pair;

        for (let index = start; index <= end; index++) {
            arr[index] = 1;
        }
    }

    return arr.reduce((acc, curr) => acc += (curr === 1)? 1 : 0, 0)
};

console.log(numberOfPoints([[3,6],[1,5],[4,7]]))
console.log(numberOfPoints([[1,3],[5,8]]))

