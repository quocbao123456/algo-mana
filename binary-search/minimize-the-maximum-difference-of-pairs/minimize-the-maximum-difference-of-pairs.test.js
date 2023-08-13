import { minimizeMax } from "./minimize-the-maximum-difference-of-pairs";

test("happy case", () => {
    expect(minimizeMax([2,6,2,4,2,2,0,2], 4)).toEqual(2);
    expect(
        minimizeMax([10,1,2,7,1,3], 2)
    ).toEqual(1);
});

test("edge case", () => {
    expect(minimizeMax([1,1,0,3], 2)).toEqual(2);
});
