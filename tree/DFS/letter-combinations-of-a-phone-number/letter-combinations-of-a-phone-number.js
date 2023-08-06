// https://leetcode.com/problems/letter-combinations-of-a-phone-number/  (58.1%)

const letters = [
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
]

export const letterCombinations = function (digits) {
    if(!digits) return [];
    const mapChars = new Map(letters);
    const result = []

    function traverse(visiteds, str){
        if(!str) {
            result.push(visiteds)
            return;
        }
        const cases = mapChars.get(str[0]);
        str = str.slice(1);

        for (const letter of cases) {
            visiteds += letter;
            traverse(visiteds, str)
            visiteds = visiteds.slice(0, -1)
        }

        return;
    }

    traverse("", digits)
    return result;
};

// Complexity: O(N) (constant char set)
// Mem: O(N)

letterCombinations("23") // --> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
