import { wordBreak } from "./word-break";

test("happy case", () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toEqual(true);
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toEqual(false);
});
