// https://leetcode.com/problems/decode-ways    (33.2%)
/**
 * @param {string} s
 * @return {number}
 */
export const numDecodings = function (s) {
    const memozieds = new Map();
    function isInValid(str) {
        return str.length > 2 || Number(str) > 26 || str === "0";
    }

    function dp(index, tmp) {
        if (index >= s.length && !tmp) {
            return 1;
        }
        if (memozieds.has(`${index},${tmp}`))
            return memozieds.get(`${index},${tmp}`);

        const curr = tmp + s[index];

        if (isInValid(curr)) return -Infinity;

        const choose = dp(index + 1, curr);
        const noChoose = dp(index + 1, "");

        const total =
            (choose === -Infinity ? 0 : choose) +
            (noChoose === -Infinity ? 0 : noChoose);

        memozieds.set(`${index},${tmp}`, total);
        return total;
    }
    const result = dp(0, "", "");
    return result === -Infinity ? 0 : result;
};

// Complexity: O(N)
// Mem: O(N)
