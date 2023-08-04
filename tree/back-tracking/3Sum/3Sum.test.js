import { threeSum } from "./3Sum";

// no need orderly
test("happy case", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
        [-1, 0, 1],
        [-1, 2, -1],
    ]);
});

test("edge case", () => {
    expect(threeSum([-2,0,0,2,2])).toEqual([
        [-2, 0, 2],
    ]);
});
