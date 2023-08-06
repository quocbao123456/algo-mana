import { coinChange } from "./coin-change"

test('happy case', () => {
    expect(coinChange([1,2,5], 11)).toEqual(3)
    expect(coinChange([1,2,5], 101)).toEqual(21)
})

test('edge case', () => {
    expect(coinChange([2], 3)).toEqual(-1)
    expect(coinChange([1], 0)).toEqual(0)
})
