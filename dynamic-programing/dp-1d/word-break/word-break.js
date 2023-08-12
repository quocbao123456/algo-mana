// https://leetcode.com/problems/word-break/   (46.2%)

export const wordBreak = function (s, wordDict) {
    const dicts = new Set(wordDict);
    const memomizeds = new Map();

    function dp(word) {
        if (!word) return true;
        if (memomizeds.has(word)) return memomizeds.get(word);

        let result = false;
        for (let index = 0; index < word.length; index++) {
            if (dicts.has(word.slice(0, index + 1))) {
                result = result || dp(word.slice(index + 1));
            }
        }

        memomizeds.set(word, result);
        return result;
    }

    return dp(s);
};

// Complexity: N*M (M: length of word)
// Mem: N

// Can solve it with DFS with memorization
