//  https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array    (47.6%)
/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function (n, target) {
    const visiteds = new Set();

    let start = 1;
    let result = 0;
    while (visiteds.size < n) {
        if (!visiteds.has(target - start)) {
            visiteds.add(start);
            result += start;
        }
        start++;
    }
    return result
};

minimumPossibleSum(3, 3);
minimumPossibleSum(2, 3);
