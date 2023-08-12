/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// https://leetcode.com/problems/longest-common-subsequence/    (57.9%)


// // Let try with dp with memozieds
// var longestCommonSubsequence = function (text1, text2) {
//     const memozieds = new Map();
//     function dp(str1, str2) {
//         // console.log("str1", str1, str2)
//         if (!str1 || !str2) return 0;

//         if (memozieds.has(str1 + str2))
//             return memozieds.get(str1 + str2);

//         let result;
//         if (str1[str1.length - 1] === str2[str2.length - 1]) {
//             result = 1 + dp(str1.slice(0, -1), str2.slice(0, -1));
//         } else {
//             result = Math.max(
//                 dp(str1.slice(0, -1), str2),
//                 dp(str1, str2.slice(0, -1))
//             );
//         }

//         memozieds.set(str1 + str2, result);

//         return result;
//     }

//     const result = dp(text1, text2);
//     console.log("memozieds", memozieds.size)

//     return result;
// };
// Complexity: O(N^2)
// Mem: O(N^2)

// --> FAILED 42/47 --> still pass on local
// throw error overflow memory


// Actually we don't need manage str, only control index of 2 input
// var longestCommonSubsequence = function (text1, text2) {
//     const memozieds = new Map();
//     function dp(index1, index2) {
//         if(index1 >= text1.length || index2 >= text2.length) return 0;
//         // if(index1 < 0 || index2 < 0) return 0;

//         if (memozieds.has(`${index1},${index2}`))
//             return memozieds.get(`${index1},${index2}`);

//         let result; 
//         if (text1[index1]=== text2[index2]) {
//             result = 1 + dp(index1 + 1, index2 + 1);
//         } else {
//             result = Math.max(
//                 dp(index1 + 1, index2),
//                 dp(index1, index2 + 1)
//             );
//         }

//         memozieds.set(`${index1},${index2}`, result);
//         return result;
//     }

//     const result = dp(0,0);
//     return result;
// };
// Complexity: O(N^2)
// Mem: O(N^2)

// --> PASSED
// BUT by the way, memory we need so big(beat 5-> 10%), beside performance also so poor

// LET try handle it by bottom up (TABULATION)
export const longestCommonSubsequence = function (text1, text2) {
    const tableDP = Array.from({length: text2.length}, () => Array.from({length: text1.length}, () => 0));

    for (let i = 0; i < text2.length; i++) {
        for (let j = 0; j < text1.length; j++) {

            const top = j === 0 ? 0 :tableDP[i][j - 1];
            const left = i === 0 ? 0 :tableDP[i - 1][j]

            const gross = (i === 0 || j === 0) ? 0 :tableDP[i - 1][j - 1];
            if(text2[i] === text1[j]){
                tableDP[i][j] = 1 + gross
            }else{
                tableDP[i][j] = Math.max(top, left)
            }
        }
    }

    return tableDP[text2.length - 1][text1.length - 1]
};
// Complexity: O(N^2)
// Mem: O(N^2)

// This way optimzie memory so far(beat 8x %) from 200mb -> 7xmb




