import { lengthOfLongestSubstring } from "./group-anagrams";

test("happy case", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring("pwwk")).toBe(2);
    expect(lengthOfLongestSubstring("aabaab!")).toBe(3);

});

test("edge case", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring(" ")).toBe(1);
});
