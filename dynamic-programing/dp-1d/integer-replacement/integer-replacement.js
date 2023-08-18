// https://leetcode.com/problems/integer-replacement/  (35.3%)

var integerReplacement = function(n) {
    if(n === 1) return 0;
    let result = Infinity;

    const memozieds = new Map();
    function dp(num, step){
        if(memozieds.get(num) < step) return;
        memozieds.set(num, step);

        if(num === 1){
            result = Math.min(result, step);
            return
        }

        if(num%2 === 0) {
            return dp(num/2, step + 1);
        }

        dp(num + 1, step + 1);
        dp(num - 1, step + 1);
    }

    dp(n, 0);

    return result
};
