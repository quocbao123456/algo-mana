// https://leetcode.com/problems/remove-duplicate-letters/  (48.8%)

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const len = new Set([...s]).size;
    let min = "z".repeat(len);
    const visiteds = new Set();
    function dp(str, index, chars) {
        if (index >= s.length) {
            console.log("str", str);
            if (str.length === len && str < min) min = str;
            return;
        }

        const curr = s[index];
        if (chars.has(curr)) return dp(str, index + 1, chars);

        const cloneSet = new Set(chars);
        cloneSet.add(curr);

        dp(str + curr, index + 1, cloneSet);
        dp(str, index + 1, chars);
    }

    dp("", 0, visiteds);

    return min;
};

var removeDuplicateLetters = function (s) {
    const stack = [];
    const visiteds = new Set();
    let indexes = {}
    for (let index = 0; index < s.length; index++) {
        indexes[s[index]] = index;
    }

    for (let index = 0; index < s.length; index++) {
        const char = s[index];
        if (!visiteds.has(char)) {
            while (
                stack.length &&
                indexes[stack.slice(-1)] > index && stack.slice(-1) > char
            ) {
                visiteds.delete(stack.pop());
            }

            stack.push(char);
            visiteds.add(char);
        }
    }
    return stack.join("");
};

removeDuplicateLetters("bcabc");
removeDuplicateLetters("cbacdcbc");
