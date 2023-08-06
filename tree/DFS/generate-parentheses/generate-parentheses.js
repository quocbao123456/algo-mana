// https://leetcode.com/problems/generate-parentheses  (73.1%)

// DFS
const Parentheses = {
    PARENTHESES_L: "(",
    PARENTHESES_R: ")",
}
export const generateParenthesis = function (n) {
    const result = [];

    function traverse(str, open, close){
        if(open > close) return;
        if(!open && !close) {
            result.push(str)
        }

        if(open > 0){
            traverse(str + Parentheses.PARENTHESES_L, open - 1, close);
        }

        if(close > 0){
            traverse(str + Parentheses.PARENTHESES_R, open, close - 1);
        }
    }

    traverse("", n, n);
    return result;
};

// 1 <= n <= 8
// Complexity: O(2^N)
// Mem: O(N)

