import { sortColors } from "./sort-color";

test("happy case", () => {
    expect(sortColors([2,0,2,1,1,0])).toEqual([0,0,1,1,2,2]);
});


test("edge case", () => {
    expect(sortColors([2,1])).toEqual([1,2]);
    expect(sortColors([1,0])).toEqual([0,1]);
    expect(sortColors([2,0])).toEqual([0,2]);
});
