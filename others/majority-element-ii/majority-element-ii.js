// https://leetcode.com/problems/majority-element-ii/   (50.2%)

var majorityElement = function (nums) {
    let cnt1 = 0;
    let cnt2 = 0;
    let candidate1 = -Infinity;
    let candidate2 = -Infinity;

    nums.forEach((num) => {
        if (!cnt1 && num !== candidate2) {
            cnt1 = 1;
            candidate1 = num;
        } else if (!cnt2 && num !== candidate1) {
            cnt2 = 1;
            candidate2 = num;
            return;
        } else if (num === candidate1) {
            cnt1++;
        } else if (num === candidate2) {
            cnt2++;
        } else {
            cnt1--;
            cnt2--;
        }
    });

    console.log(cnt1, cnt2, candidate1, candidate2)

    let weight1 = 0,
        weight2 = 0;
    let limit = Math.floor(nums.length / 3);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate1) weight1++;
        if (nums[i] === candidate2) weight2++;
    }

    return [
        ...(weight1 > limit ? [candidate1] : []),
        ...(weight2 > limit ? [candidate2] : []),
    ];
};
// console.log(majorityElement([3,3,2,3,2,5,7,7, 7]))
// console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2]));
// console.log(majorityElement([3,2,3,3,5,2,2,2]));
console.log(majorityElement([1,2,3,4,5]));
