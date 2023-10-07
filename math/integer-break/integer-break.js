// https://leetcode.com/problems/integer-break  (59.8%)

/**
 * @param {number} n
 * @return {number}
 */
// var integerBreak = function(n) {
//     if(n <= 3) return n - 1;
//     const haftThree = Math.floor(n/3);
//     const mol = n%3;

//     switch(mol){
//         case 0:
//             return 3**haftThree
//         case 1:
//             return 3**(haftThree - 1)*4
//         case 2:
//             return 3**(haftThree)*2
//         default:
//             return n
//     }
// };

var integerBreak = function(n) {
    const memozieds = {}

    function dfs(num){
        if(num === 0 || num === 1) return 1;
        if(num === 2 || num === 3) return n >= 3 ? num : num - 1;

        if(memozieds[num]) return memozieds[num];

        let result = -Infinity;
        for (let candidate = 1; candidate <= num; candidate++) {
            const next = dfs(num - candidate)*candidate;
            result = Math.max(next, result)
        }

        memozieds[num] = result;
        return result
    }

    return dfs(n)
};
console.log(integerBreak(10))
console.log(integerBreak(5))

