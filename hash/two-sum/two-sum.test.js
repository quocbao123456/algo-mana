import { twoSum } from "./two-sum";

test("happy case", () => {
    expect(twoSum([2,7,11,15], 9).sort()).toEqual([0,1]);
    expect(twoSum([3,2,4], 6).sort()).toEqual([1,2]);

});
