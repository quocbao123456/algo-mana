// https://leetcode.com/problems/beautiful-towers-i/    (42.4%)

/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (maxHeights) {
    function countSum(topIndex) {
        let total = 0;
        
        let maxLeft = maxHeights[topIndex];
        for (let index = topIndex - 1; index >= 0; index--) {
            const currMax = Math.min(maxLeft, maxHeights[index]);
            maxLeft = Math.min(currMax, maxLeft);

            total += currMax;
        }

        let maxRight = maxHeights[topIndex];
        for (let index = topIndex + 1; index < maxHeights.length; index++) {
            const currMax = Math.min(maxRight, maxHeights[index]);
            maxRight = Math.min(maxHeights[index], maxRight);

            total += currMax;
        }

        return total + maxHeights[topIndex];
    }

    return Math.max(...maxHeights.map((_, index) => countSum(index)));
};

// console.log(maximumSumOfHeights([6,5,3,9,2,7]))
// console.log(maximumSumOfHeights([3,2,5,5,2,3]))
// console.log(maximumSumOfHeights([3, 6, 3, 5, 5, 1, 2, 5, 5, 6]));
console.log(maximumSumOfHeights([5,2,4,4]));
