import { rob } from "./rob"

test('should normal test case correctly', () => {
    expect(rob([1,2,3,1])).toEqual(4)
    expect(rob([2,1,1,2])).toEqual(4)
    expect(rob([1, 2])).toEqual(2)
    expect(rob([1])).toEqual(1)
})

test('should one item input', () => {
    expect(rob([1])).toEqual(1)
})

test('should empty input', () => {
    expect(rob([])).toEqual(0)
})