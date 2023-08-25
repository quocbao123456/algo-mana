// https://leetcode.com/problems/reorganize-string/ (54.3%)
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const freq = new Map();

    for (const char of s) {
        const f = (freq.get(char) || 0) + 1;
        freq.set(char, (freq.get(char) || 0) + 1);

        if (f > Math.ceil(s.length / 2)) return "";
    }


    let result = "";

    while(result.length < s.length){

        let max = 0;
        let maxKey = "";
        for (const [key, value] of freq.entries()) {
            if(value > max && key !== result[result.length - 1]) {
                maxKey = key;
                max = value;
            }
        }

        result += maxKey;
        freq.set(maxKey, max - 1);
    }

    return result;
};

// var reorganizeString = function (s) {
//     const freq = new Map();

//     for (const char of s) {
//         const f = (freq.get(char) || 0) + 1
//         freq.set(char, (freq.get(char) || 0) + 1);

//         if(f > Math.ceil(s.length/2)) return false;
//     }
//     let result = "";

//     const memozieds = new Map();
//     let count = 0 ;

//     function dfs(str) {

//     }
//     dfs("");
//     console.log("count", count)
//     return result;
// };

console.log(reorganizeString("aaab"));
console.log(reorganizeString("aaabccc"));
console.log(reorganizeString("aab"));
console.log(reorganizeString("eqpspvbpppwpgyppppe"));

// reorganizeString("eqpspvbpppwpgyppppe");
// reorganizeString("eqpspvbpppwpgyppppe");
