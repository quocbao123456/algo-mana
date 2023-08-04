import { threeSum } from "./3Sum";

test("happy case", () => {

    // no need orderly
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
        [-1, 0, 1],
        [-1, 2, -1],
    ]);
});
