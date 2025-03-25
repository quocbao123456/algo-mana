/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b);

    function bsLower(startIndex) {
        let left = startIndex;
        let right = nums.length - 1;
        let op1 = nums[left];

        while (left < right) {
            let mid = Math.floor((right + left) / 2);

            console.log(left, right)
            if (op1 + nums[mid] > lower) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
    console.log(bsLower(0), bsGreater(0))


    function bsGreater(startIndex) {
        let left = startIndex;
        let right = nums.length - 1;
        let op1 = nums[left];

        while (left < right) {
            let mid = Math.floor((right + left) / 2);

            if (op1 + nums[mid] < upper) {
                left = mid + 1;
            } else {
                right = mid - 1;

            }
        }
        return right;
    }

    // let result = 0;
    // for (let index = 0; index < nums.length; index++) {
    //     console.log("result", bsGreater(index), bsLower(index))

    //     if(bsLower(index) <= bsGreater(index)) result += bsGreater(index) - bsLower(index);
    // }


    // console.log("result", result)
    // return result
};

countFairPairs([0, 1, 7, 4, 4, 5], 3, 6);
// countFairPairs([0, 0, 0, 0 ,0, 0 ], 0, 0);
