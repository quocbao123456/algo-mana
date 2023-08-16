// https://leetcode.com/problems/guess-number-higher-or-lower-ii   (47.7%)
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    if(n === 1) return 0;
    const memozieds = new Map();

    function dp(i, j){
        if(i >= j) return 0;
        
        if(memozieds.has(`${i}-${j}`)) return memozieds.get(`${i}-${j}`)

        let result = Infinity;
        for (let pivot = Math.floor((j + i)/2); pivot <= j; pivot++) {
            const left = dp(i, pivot - 1);
            const right = dp(pivot + 1, j);

            let max = Math.max(left, right) + pivot;
            result = Math.min(result, max)
        }
        memozieds.set(`${i}-${j}`, result)
        return result
    }

    return dp(1, n)
};

// var getMoneyAmount = function(n) {
//     if(n === 1) return 0;
//     const memozieds = new Map();

//     function dp(i, j){
//         if(i >= j) return 0;
        
//         if(memozieds.has(`${i}-${j}`)) return memozieds.get(`${i}-${j}`)

//         let result = Infinity;
//         for (let pivot = Math.floor((j + i)/2); pivot <= j; pivot++) {
//             const left = dp(i, pivot - 1);
//             const right = dp(pivot + 1, j);

//             let max = Math.max(left, right) + pivot;
//             result = Math.min(result, max)
//         }
//         memozieds.set(`${i}-${j}`, result)
//         return result
//     }

//     return dp(1, n)
// };
console.log(getMoneyAmount(10))
console.log(getMoneyAmount(3))

console.log(getMoneyAmount(7))
console.log(getMoneyAmount(4))