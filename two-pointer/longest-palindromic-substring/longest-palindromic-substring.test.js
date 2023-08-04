import longestPalindrome from "./longest-palindromic-substring";

test("happy case", () => {
    expect(longestPalindrome("babad")).toMatch(/(bab|aba)/i)
});

test("edge case", () => {
    expect(longestPalindrome("aaaa")).toBe("aaaa")
    expect(longestPalindrome("")).toBe("");
    expect(longestPalindrome("a")).toBe("a");
});