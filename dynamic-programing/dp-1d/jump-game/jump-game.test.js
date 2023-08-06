import { canJump } from "./jump-game"

test('happy case', () => {
    expect(canJump([5,9,3,2,1,0,2,3,3,1,0,0])).toEqual(true)
    expect(canJump([3,2,1,0,4])).toEqual(false)
})

test('edge case', () => {
    expect(canJump([2,0])).toEqual(true)
    expect(canJump([2, 0, 0])).toEqual(true)
})
