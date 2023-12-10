//  https://leetcode.com/problems/longest-palindromic-substring/    (32.6%)

// DP --> not pass
// export default longestPalindrome = function (s) {
//     if(!s.length) return "";

//     function dp(i, j){

//         if(i === j) return s[i];
//         if(i > j) return "";

//         const cross = dp(i + 1, j - 1);
//         if(s[i] === s[j] && cross.length === (j - i - 1)) {
//             return s[i] + cross + s[j];
//         }

//         const bottom = dp(i + 1, j);
//         const left = dp(i, j - 1);
//         return bottom.length >= left.length ? bottom : left;
//     }

//     return dp(0, s.length - 1)
// };

// Complexity:   (every case)
// Mem: 2^N

// // DP (memozied)
// export default longestPalindrome = function (s) {
//     if(!s.length) return "";
//     const memozieds = new Map();

//     function dp(i, j){
//         if(i === j) return s[i];
//         if(i > j) return "";

//         if(memozieds.has(`${i},${j}`)) return memozieds.get(`${i},${j}`)

//         const cross = dp(i + 1, j - 1);
//         let result = "";

//         if(s[i] === s[j] && cross.length === (j - i - 1)) {
//             result = s[i] + cross + s[j];
//             memozieds.set(`${i},${j}`, result)
//             return result;
//         }

//         const bottom = dp(i + 1, j);
//         const left = dp(i, j - 1);
//         result = bottom.length >= left.length ? bottom : left;

//         memozieds.set(`${i},${j}`, result)
//         return result;
//     }

//     return dp(0, s.length - 1)
// };

// // DP (Tabulation)
// export default longestPalindrome = function (s) {
//     if(!s.length) return "";

//     const table = Array.from({length: s.length}, (_, i) => Array.from({length: s.length}, () => ""));
//     for (let i = s.length - 1; i >= 0; i--) {
//         for (let j = 0; j < s.length; j++) {
//             if(i === j) {
//                 table[i][j] = s[i];
//                 continue;
//             }

//             if(i > j) {
//                 table[i][j] = "";
//                 continue;
//             }

//             if(s[i] === s[j] && table[i + 1][j - 1].length === (j - i - 1)) {
//                 table[i][j] = s[i] + table[i + 1][j - 1] + s[j];
//                 continue;
//             }

//             table[i][j] = table[i][j - 1].length >= table[i + 1][j].length ? table[i][j - 1] : table[i + 1][j];
//         }
//     }
//     return table[0][s.length - 1]
// };

// 1 <= s.length <= 1000
// Complexity: N^2 (every case)
// Mem: N^2

// Note!: Because this way will have N^2 in every case due to performance so poor compare to 2 pointer way
// But still have way optimized dp way

// Refer: Using 2 pointer to solve this problem

// const longestPalindrome = function (s) {
//     if (!s) return "";

//     // Init
//     let result = s[0];
//     const len = s.length * 2 - 1;

//     // Through
//     for (let index = 1; index < len - 1; index++) {
//         let left = index % 2 === 0 ? index / 2 - 1 : Math.floor(index / 2);
//         let right = index % 2 === 0 ? left + 2 : left + 1;
//         let local = "";

//         while (left > 0 && right < s.length) {
//             if (s[left] !== s[right]) break;
//             left--;
//             right++;
//         }

//         local =
//             s[left] === s[right]
//                 ? s.slice(left, right + 1)
//                 : s.slice(left + 1, right);

//         if (local.length > result.length) result = local;
//     }
//     return result;
// };

const longestPalindrome = function (s) {
    if (!s) return "";

    const table = Array.from({ length: s.length }, () =>
        Array.from({ length: s.length }, () => "")
    );
    for (let x = s.length - 1; x >= 0; x--) {
        for (let y = 0; y < s.length; y++) {
            if (x > y) continue;

            if (x === y) {
                table[x][y] = s[x];
                continue;
            }

            if (s[x] === s[y] && table[x + 1][y - 1].length === y - x - 1) {
                table[x][y] = s[x] + table[x + 1][y - 1] + s[y];
                continue;
            }

            const left = table[x][y - 1];
            const bottom = table[x + 1][y];

            table[x][y] = left.length > bottom.length ? left : bottom;
        }
    }

    return table[0][s.length - 1];
};

longestPalindrome("babad");
// longestPalindrome("cbbd");
