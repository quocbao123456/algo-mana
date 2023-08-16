import { numDecodings } from "./decode-way"

test('happy case', () => {
    expect(numDecodings("11106")).toEqual(2)
    expect(numDecodings("226")).toEqual(3)
    expect(numDecodings("111111111111111111111111111111111111111111111")).toEqual(1836311903)
})

test('edge case', () => {
    expect(numDecodings("06")).toEqual(0)
})
