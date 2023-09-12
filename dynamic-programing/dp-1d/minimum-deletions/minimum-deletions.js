// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique (60.8%)

/***
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
    // utils
    const arrByRange = (x, y) =>
        Array.from({ length: y - x - 1 }, (_, i) => x + i + 1);

    // build freq hash table
    const freqs = new Map();
    for (const char of s) {
        freqs.set(char, (freqs.get(char) || 0) + 1);
    }
    const weights = [...freqs.values()].sort((a,b) => a - b);

    // main process
    let result = 0;
    const offsets = arrByRange(0, weights[0]);

    for (let index = 1; index < weights.length; index++) {
        const curr = weights[index];
        const prev = weights[index - 1];

        if (curr === prev) {
            result += curr - (offsets.length ? offsets.pop() : 0);
        }

        if (curr - prev > 1) {
            offsets.push(...arrByRange(prev, curr));
        }
    }
    return result;
};
