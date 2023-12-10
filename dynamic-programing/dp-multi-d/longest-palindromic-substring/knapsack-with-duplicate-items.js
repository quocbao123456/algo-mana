function knapSack(N,W,val,wt){
    const memozieds = new Map();

    function dp(profit, weight){
        if(weight <= 0) return profit;
        if(memozieds.has(`${profit}-${weight}`)) return memozieds.get(`${profit}-${weight}`);

        let result = profit;
        for(let index = 0; index < N; index++){
            const curr = wt[index];
            const currProfit = val[index];

            if(weight >= curr){
                result = Math.max(dp(profit + currProfit, weight - curr), result)
            }
        }
        // console.log(`${profit}-${weight}`,  result)
        memozieds.set(`${profit}-${weight}`, result)

        return result
    }

    return dp(0, W)
}


// knapSack(4,8,[6, 1, 7, 7], [1, 3, 4, 5])
// knapSack(2, 3, [5, 4], [2, 3])
// knapSack(2, 3, [1, 1], [2, 1])
console.log(knapSack(10, 999, Array.from({length: 10}, (_,i) => i + 1), Array.from({length: 10}, (_,i) => i + 1)))


