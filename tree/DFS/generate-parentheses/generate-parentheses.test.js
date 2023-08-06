import { generateParenthesis } from "./generate-parentheses";

// no need orderly
test("happy case", () => {
    expect(generateParenthesis(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
    expect(generateParenthesis(1)).toEqual(["()"]);
});
