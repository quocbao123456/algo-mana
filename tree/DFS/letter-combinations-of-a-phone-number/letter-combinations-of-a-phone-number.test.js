import { letterCombinations } from "./letter-combinations-of-a-phone-number"

test('happy case', () => {
    expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})

test('edge case', () => {
    expect(letterCombinations("")).toEqual([])
})
