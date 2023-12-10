var canPartition = function (nums) {
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    if(total%2 !== 0) return false;
    const haft = total/2;

    const memozieds = new Map();
    let flag = false;

    function dp(index, total){
        if(flag) return true;
        if(index >= nums.length) return false;
        if(total === haft) return true;

        const key = `${index}-${total}`;
        if(memozieds.has(key)) return memozieds.get(key)

        let result =  dp(index + 1, total) || dp(index + 1, total + nums[index]);
        if(result) flag = true;
        memozieds.set(key, result)
        return result
    }

    return dp(0, 0);
};

var canPartition = function (nums) {
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    if(total%2 !== 0) return false;
    const haft = total/2;

    const candidates = new Set([0]);

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];

        if(candidates.has(haft - curr)) {
            return true;
        }
        const visiteds = [...candidates.values()]
        for(const candidate of visiteds){
            if(curr + candidate < haft) candidates.add(curr + candidate)
        }
    }

    return false
};

var canPartition = function (nums) {
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    if (total % 2 !== 0) return false;
    const haft = total / 2;

    const dp = Array.from({ length: nums.length }, () =>
        Array(haft + 1).fill(false)
    );

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];

        if(!i) {
            dp[0][0] = true;
            dp[0][curr] = true;
            continue;
        }

        for (let j = 0; j <= haft; j++) {
            const exclude = dp[i - 1][j];
            let include = dp[i - 1][j - curr];
            dp[i][j] = Boolean(exclude || include);
        }
    }

    return dp[nums.length - 1][haft];
};

console.log(canPartition([1, 3, 4]));
console.log(canPartition([1,2,5]))
