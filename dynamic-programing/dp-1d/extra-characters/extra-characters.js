// https://leetcode.com/problems/extra-characters-in-a-string   (53.4%)

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
// var minExtraChar = function(s, dictionary) {
//     if(!s) return 0;

//     const dict = new Set(dictionary);

//     const dp = new Array(s.length + 1).fill(Infinity);
//     dp[0] = 0;

//     for (let index = 0; index < s.length; index++) {
//         if(index <= s.length - 1) dp[index + 1] = Math.min(dp[index] + 1, dp[index + 1]);

//         for (const word of dict) {
//             const nextIndex = index + word.length;
//             const w = s.slice(index, nextIndex);

//             if(word === w){
//                 console.log("word", word, nextIndex)
//                 dp[nextIndex] = Math.min(dp[nextIndex], dp[index])
//             }
//         }
//     }
//     return dp.pop()
// };

// var minExtraChar = function(s, dictionary ) {
//     if(!s) return 0;
//     const memozieds = new Map();

//     function dp(index){
//         if(index <= 0) return 0;
//         if(memozieds.has(index)) return memozieds.get(index)

//         let result = dp(index - 1) + 1;
//         for (const word of dictionary) {
//             const nextIndex = index - word.length;
//             const w = s.slice(nextIndex, index);

//             if(word === w){
//                 result = Math.min(dp(nextIndex), result)
//             }
//         }

//         memozieds.set(index, result)
//         return result;
//     }

//     return dp(s.length)
// };

class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

function buildTrie(dict) {
    const root = new TrieNode();

    for (const word of dict) {
        let node = root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }
        node.isWord = true;
    }

    return root;
}

var minExtraChar = function (s, dictionary) {
    if (!s) return 0;

    const root = buildTrie(dictionary);
    const dp = new Array(s.length + 1).fill(Infinity);
    dp[0] = 0;

    for (let index = 0; index < s.length; index++) {
        if (index <= s.length - 1)
            dp[index + 1] = Math.min(dp[index] + 1, dp[index + 1]);

        let node = root;
        let nextIndex = index;
        for (const char of s.slice(index)) {
            if (!node.children[char]) break;

            node = node.children[char];
            nextIndex++;

            if (node.isWord) dp[nextIndex] = Math.min(dp[index], dp[nextIndex]);
        }
    }

    return dp.pop()
};

console.log(minExtraChar("leetscode", ["leet", "code", "leetcode"]));
// console.log(minExtraChar("s", ["leet","code","leetcode"]))
