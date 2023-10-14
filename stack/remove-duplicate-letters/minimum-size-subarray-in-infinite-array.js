/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function (nums, target) {
    function getValue(index) {
        return nums[index % nums.length];
    }

    let startIndex = 0,
        endIndex = 0;
    let total = 0;
    let result = Infinity;

    function moveStart() {
        while (total > target) {
            total -= getValue(startIndex);
            startIndex++;
        }
    }
    const visiteds = new Set();
    let flag = false;

    while (true) {
        const key = `${startIndex % nums.length}-${endIndex % nums.length}`;
        if (visiteds.has(key) && flag) {
            return result === Infinity ? -1 : result;
        }
        visiteds.add(key);
        total += getValue(endIndex);

        if (total === target) {
            result = Math.min(result, endIndex - startIndex + 1);
        }

        if (total > target) {
            flag = true;
            moveStart();
            total -= getValue(endIndex);
            continue;
        }

        endIndex++;
    }
};
console.log(minSizeSubarray([2, 1, 5, 7, 7, 1, 6, 3], 39));

console.log(minSizeSubarray([1, 1, 1], 1000000000));

// console.log(minSizeSubarray([1, 2, 3], 2));
// console.log(minSizeSubarray([1, 2, 3], 5));

// // console.log(minSizeSubarray([1, 1, 1, 2, 3], 4));
// console.log(minSizeSubarray([2, 4, 6, 8], 3));
// // console.log(minSizeSubarray([1, 2, 3], 5));
// console.log(minSizeSubarray([2, 1, 5, 7, 7, 1, 6, 3], 39));
// console.log(
//     minSizeSubarray(
//         [18, 3, 11, 19, 7, 16, 6, 7, 3, 6, 18, 9, 9, 1, 14, 17, 15, 14, 12, 10],
//         7
//     )
// );

//  2, 1, 5, 7, 7, 1, 6, 3, 2, 1, 5, 7, 7, 1, 6, 3, 2, 1, 5, 7, 7, 1, 6, 3

//  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23

// const a = [2, 1, 5, 7, 7, 1, 6, 3, 2, 1, 5].reduce((acc, curr) => acc + curr);
// console.log(a);
