var reductionOperations = function (nums) {
    nums.sort((a, b) => a - b);

    if (nums.length < 2) return 0;

    let candidateTotal = 0;
    let result = 0;

    let largest;

    while (nums.length) {
        largest = nums.pop();
        if (!nums.length) break;

        candidateTotal++;

        if (largest !== nums[nums.length - 1]) {
            result += candidateTotal;
        }
    }


    return result;
};

reductionOperations([1, 1, 2, 2, 3]);
reductionOperations([5, 1, 3]);
