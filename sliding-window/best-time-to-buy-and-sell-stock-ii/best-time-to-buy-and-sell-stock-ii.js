// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii     (65.2%)

var maxProfit = function(prices) {
    if(prices.length < 2) return 0;

    let buy = prices[0], sell = -Infinity;
    let profit = 0;
    
    for (let index = 0; index < prices.length; index++) {
        if(prices[index] < buy && sell === -Infinity){
            // Update lower buy
            buy = prices[index];
        }else if(prices[index] < sell){
            // Sell and buy at lower price
            profit += sell - buy;
            buy = prices[index];
            sell = -Infinity
        }else{
            // Update higher sell
            sell = prices[index]
        }
    }

    return profit + (sell === -Infinity ? 0 : sell - buy)
};


maxProfit([7,1,5,3,6,4])
maxProfit([1,2,3,4,5])
