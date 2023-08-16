import { maxArea } from "./container-with-most-water";

test("happy case", () => {

    // no need orderly
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
    expect(maxArea([1,3,2,5,25,24,5])).toEqual(24);

    expect(maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7])).toEqual(200);
    expect(maxArea([1,2,3,4,5,25,24,3,4])).toEqual(24);

});
