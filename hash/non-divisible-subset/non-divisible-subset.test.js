import { nonDivisibleSubset } from "./non-divisible-subset";

test("happy case", () => {
    expect(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])).toEqual(3);
    expect(
        nonDivisibleSubset(
            7,
            [
                278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771,
                575, 436,
            ]
        )
    ).toEqual(11);

    expect(nonDivisibleSubset(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(5);
});

test("edge case", () => {
    expect(nonDivisibleSubset(1, [1, 2, 3, 4, 5])).toEqual(1);
});
