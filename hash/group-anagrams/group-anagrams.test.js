import { groupAnagrams } from "./group-anagrams";

test("happy case", () => {
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toEqual([["eat","tea","ate"], ["tan","nat"], ["bat"]]);
});

test("edge case", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
});
