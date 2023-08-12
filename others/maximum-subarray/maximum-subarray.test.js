import { maxSubArray } from "./maximum-subarray"

test('should normal test case correctly', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6)
    expect(maxSubArray([5,4,-1,7,8])).toEqual(23)
})

test('edge case', () => {
    expect(maxSubArray([-2])).toEqual(-2)
    expect(maxSubArray([])).toEqual(0)
    expect(maxSubArray([-2, -1])).toEqual(-1)

})
