// https://leetcode.com/problems/minimum-operations-to-make-a-special-number/   (34.1%)

/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
    let indexZero = -1;
    let indexFive = -1;

    for (let index = num.length - 1; index >= 0; index--) {
        const char = num[index];

        if(indexZero !== -1 && (char === "0" || char === "5")) return num.length - index -2;
        if(indexFive !== -1 && (char === "2" || char === "7")) return num.length - index - 2;

        if(char === "0") indexZero = index;
        if(char === "5") indexFive = index;

    }
    return indexZero === -1 ? num.length : num.length - 1;
};



