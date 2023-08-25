/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    // let result = false;
    // let count = 0;
    // function dfs(visiteds, startIndex, flag) {
    //     count++;
    //     console.log("visiteds", visiteds)
    //     if(result) return;
    //     if(startIndex > nums.length) return;

    //     if (visiteds.length === 3) {
    //         result = true;
    //         return;
    //     }
    //     const last = visiteds[visiteds.length - 1];

    //     const list = new Set(visiteds);
    //     for (let index = startIndex; index < nums.length; index++) {
    //         const curr = nums[index];

    //         const isFirst = !visiteds.length;
    //         const isPeak = flag && curr > last;
    //         const isThird = !flag && curr < last && curr > visiteds[0];

    //         if(isThird) {
    //             result = true;
    //             return;
    //         };

    //         if ((isFirst || isPeak) && !list.has(curr)) {
    //             list.add(curr)
    //             visiteds.push(curr);
                
    //             dfs([...visiteds], index + 1, !flag);

    //             visiteds.pop();
    //         }

    //     }
    // }

    // dfs([], 0, false);

    // console.log("count", count)
    // console.log("result", result)

    const firsts = new Set();
    nums = nums.reduce((acc, curr, index) => {
        if(!index || curr !== nums[index - 1] ){
            acc.push(curr);
        }
        return acc
    }, [])

    console.log("nums", nums)


    function search(start){
        const seconds = new Set();
        console.log("nums[start]", nums[start], start)
        for (let peak = start + 1; peak < nums.length; peak++) {
            if(nums[peak] > nums[start] && !seconds.has(peak)){
                for (let third = peak + 1; third < nums.length; third++) {
                    if(nums[third] < nums[peak] && nums[third] > nums[start]){
                        return true;
                    }
                }
            }
            seconds.add(peak)
        }
    }
    
    for (let first = 0; first < nums.length; first++) {
        if(!firsts.has(first) && search(first)) return true;
        firsts.add(first)
    }
    
    return false;
};


console.log(find132pattern([-1, 3, 2, 0]))

// console.log(find132pattern([3,1,4,2]))
// console.log(find132pattern([-2,1,-1]))
console.log(find132pattern([26,26,26,26,26,26,26,26,32,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36, 27]))
// find132pattern([-2,1,1,1,11, -1]);

// find132pattern([-3,-10,-8,-3,-10,-6,-10,-6,-1,-10,-1,-7,-5,-3,-6,-9,-5,-5,-6,-8,-9,-9,-10,-2,-3,-3,-7,-7,-10]);
// find132pattern([0,-100000,200000,-300000,400000,-500000,600000,-700000,800000,-900000,1000000,-1100000,1200000,-1300000,1400000,-1500000,1600000,-1700000,1800000,-1900000,2000000,-2100000,2200000,-2300000,2400000,-2500000,2600000,-2700000,2800000,-2900000,3000000,-3100000,3200000,-3300000,3400000,-3500000,3600000,-3700000,3800000,-3900000,4000000,-4100000,4200000,-4300000,4400000,-4500000,4600000,-4700000,4800000,-4900000,5000000,-5100000,5200000,-5300000,5400000,-5500000,5600000,-5700000,5800000,-5900000,6000000,-6100000,6200000,-6300000,6400000,-6500000,6600000,-6700000,6800000,-6900000,7000000,-7100000,7200000,-7300000,7400000,-7500000,7600000,-7700000,7800000,-7900000,8000000,-8100000,8200000,-8300000,8400000,-8500000,8600000,-8700000,8800000,-8900000,9000000,-9100000,9200000,-9300000,9400000,-9500000,9600000,-9700000,9800000,-9900000,10000000,-10100000,10200000,-10300000,10400000,-10500000,10600000,-10700000,10800000,-10900000,11000000,-11100000,11200000,-11300000,11400000,-11500000,11600000,-11700000,11800000,-11900000,12000000,-12100000,12200000,-12300000,12400000,-12500000,12600000,-12700000,12800000,-12900000,13000000,-13100000,13200000]);
