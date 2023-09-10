// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/ (53.6%)

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkStrings = function (s1, s2) {
    if (s1.length !== s2.length) return false;
    const evens = new Map();
    const olds = new Map();

    for (let index = 0; index < s1.length; index++) {
        if (index % 2 === 0) {
            olds.set(s1[index], (olds.get(s1[index]) || 0) + 1);
        } else {
            evens.set(s1[index], (evens.get(s1[index]) || 0) + 1);
        }
    }

    for (let index = 0; index < s2.length; index++) {
        if (index % 2 === 0 && olds.get(s2[index]) > 0) {
            olds.set(s2[index], olds.get(s2[index]) - 1);
            continue;
        }

        if (index % 2 !== 0 && evens.get(s2[index]) > 0) {
            evens.set(s2[index], evens.get(s2[index]) - 1);
            continue;
        }
        return false;
    }

    return true;
};

console.log(checkStrings("abcdba", "cabdab"));
console.log(checkStrings("ublnlasppynwgx", "ganplbuylnswpx"));
