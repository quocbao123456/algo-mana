// https://leetcode.com/problems/find-right-interval/description/   (51.3%)
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    const result = new Array(intervals.length).fill(-1);

    intervals.forEach((item, index) => item[2] = index);
    intervals.sort((a, b) => a[0] - b[0]);

    function binarySearch(target) {
        if(target > intervals[intervals.length - 1][0]) return -1;
        let left = 0,
            right = intervals.length - 1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            if (intervals[mid][0] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return intervals[left][2];
    }

    intervals.forEach((item) => result[item[2]] = binarySearch(item[1]))
    return result
};

console.log(findRightInterval([[3,4],[2,3],[1,2]]))
console.log(findRightInterval([[1,4],[2,3],[4,6],[3,5]]))
console.log(
    findRightInterval([
        [1, 12],
        [2, 9],
        [3, 10],
        [13, 14],
        [15, 16],
        [16, 17],
    ])
);
