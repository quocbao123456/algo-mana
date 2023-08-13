// https://leetcode.com/problems/evaluate-reverse-polish-notation/  (47.1%)


const MULTI = "*";
const SUB = "-";
const SUM = "+";
const DIVIDE = "/";

var evalRPN = function (tokens) {
    
    const operators = {
        "+": (op1, op2) => op1 + op2,
        "-": (op1, op2) => op1 - op2,
        "/": (op1, op2) => Math.trunc(op1/op2),
        "*": (op1, op2) => op1*op2
    }

    const stack = []

    for (const token of tokens) {
        if(isNaN(token)){
            const op1 = stack.pop();
            const op2 = stack.pop()

            const result = operators[token](op2, op1);
            stack.push(result);

        }else{
            stack.push(Number(token))
        }
    }
    return stack.pop();
};

evalRPN(["2","1","+","3","*"])