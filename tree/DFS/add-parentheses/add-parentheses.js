// https://leetcode.com/problems/different-ways-to-add-parentheses  (64.5%)

const lambdas = {
    "+": (a,b) => Number(a) + Number(b),
    "-": (a,b) => Number(a) - Number(b),
    "*": (a,b) => Number(a) * Number(b),
}

var diffWaysToCompute = function(expression) {
    if(!isNaN(expression)) return [expression]
    const result = [];

    for (let index = 0; index < expression.length; index++) {
        const curr = expression[index];
        if(isNaN(curr)){
            const left = expression.slice(0, index);
            const right = expression.slice(index + 1);

            const leftCases = diffWaysToCompute(left);
            const rightCases = diffWaysToCompute(right);

            for (const leftCase of leftCases) {
                for (const rightCase of rightCases) {
                    result.push(lambdas[curr](leftCase, rightCase))
                }    
            }
        }
    }
    return result;
};

