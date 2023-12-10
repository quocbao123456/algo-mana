/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
    let index = 0;

    while (true) {
        const char1 = s1.charCodeAt(index);
        const char2 = s2.charCodeAt(index);
        const char3 = s3.charCodeAt(index);

        if (isNaN(char1) || isNaN(char2) || isNaN(char3)) {
            break;
        }

        if (char1 !== char2 || char2 !== char3) {
            if(index < 1) return -1
            break;
        }

        index++;
    }

    return (
        Math.max(s1.length - index) +
        Math.max(s2.length - index) +
        Math.max(s3.length - index)
    );
};

console.log(findMinimumOperations("dac", "bac", "cac"))
console.log(findMinimumOperations("abc", "abb", "ab"))
console.log(findMinimumOperations("oby", "obz", "obf"))
console.log(findMinimumOperations("ca", "cccabb", "cb"))
