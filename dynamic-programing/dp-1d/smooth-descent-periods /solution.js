// https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/?envType=daily-question&envId=2025-12-15
/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let [curr, total] = [1, 1];

    for(let i = 1; i < prices.length; i++){
        if(prices[i] === prices[i - 1] - 1) {
            curr += 1;
            total += curr;
        }else{
            curr = 1;
            total += 1;
        }
    }
    return total
};