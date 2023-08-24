// https://leetcode.com/problems/maximize-the-profit-as-the-salesman   (33.5%)

/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
// var maximizeTheProfit = function (n, offers) {
//     offers.sort((a, b) => a[1] - b[1]);
//     const maxHouse = offers[offers.length - 1][1];
//     const profits = new Array(maxHouse + 1).fill(0);

//     let index = 0;
//     let indexOffer = 0;

//     while (index <= n && indexOffer < offers.length) {

//         const prev = profits[index - 1] || 0;
//         const [start, end, p] = offers[indexOffer];

//         if (end > index) {
//             profits[index] = Math.max(prev, profits[index]);
//             index++;
//             continue
//         }

//         profits[index] = Math.max(
//             prev,
//             p + (profits[start - 1] || 0),
//             profits[index]
//         );

//         indexOffer++
//     }
//     return profits[profits.length - 1];
// };

// var maximizeTheProfit = function (n, offers) {
//     const mapOffers = new Map();

//     for (const offer of offers) {
//         if (mapOffers.has(offer[1])) {
//             mapOffers.get(offer[1]).push([offer[0], offer[2]]);
//         } else {
//             mapOffers.set(offer[1], [[offer[0], offer[2]]]);
//         }
//     }

//     const dp = new Array(n).fill(0);

//     for (let index = 0; index < n; index++) {
//         dp[index + 1] = dp[index];

//         if (mapOffers.has(index)) {
//             for (const offer of mapOffers.get(index)) {
//                 const [start, gold] = offer;
//                 dp[index + 1] = Math.max(dp[index + 1], dp[start] + gold);
//             }
//         }
//         console.log(dp);
//     }
//     return dp[dp.length - 1];
// };


var maximizeTheProfit = function (n, offers) {
    offers.sort((a, b) => a[0] - b[0]);
    
    function findNextStep(startIndex){
        let left = startIndex + 1
        let right = offers.length - 1

        while(left <= right)
        {
            let mid = Math.floor((right + left)/2)

            if(offers[mid][0] > offers[startIndex][1]){
                right = mid - 1;
            }else{
                left = mid + 1
            }
        }

        return left;
    }
    const memozieds = new Map();

    function dp(startIndex){
        if(startIndex >= offers.length - 1){
            if(startIndex === offers.length - 1) return offers[startIndex][2]
            return 0;
        }

        if(memozieds.has(startIndex)) return memozieds.get(startIndex)
        

        const curr = offers[startIndex];
        const nextStep = findNextStep(startIndex);
        const choose = curr[2] + (nextStep !== -1 ? dp(nextStep) : 0);
        const noChoose = dp(startIndex + 1);
        const result = Math.max(choose, noChoose);

        memozieds.set(startIndex, result)
        return Math.max(choose, noChoose)
    }

    return dp(0);
};


console.log(maximizeTheProfit(5, [
    [0, 0, 1],
    [0, 2, 2],
    [1, 3, 2],
]))


console.log(
    maximizeTheProfit(5, [
        [0, 0, 1],
        [1, 2, 10],
        [1, 3, 2],
    ])
);

console.log(
    maximizeTheProfit(5, [
        [0, 0, 1],
        [0, 2, 10],
        [1, 3, 2],
    ])
);
console.log(
    maximizeTheProfit(5, [
        [0, 0, 5],
        [3, 3, 1],
        [1, 2, 5],
        [0, 0, 7],
    ])
);
console.log(
    maximizeTheProfit(
        10, [[0,6,5],[2,9,4],[0,9,2],[3,9,3],[1,6,10],[0,1,3],[3,8,9],[4,8,3],[2,6,5],[0,4,6]]
    )
);

maximizeTheProfit(4, [[0,0,5],[3,3,1],[1,2,5],[0,0,7]]);
maximizeTheProfit(4, [[1,3,9],[0,2,10],[1,3,3],[0,1,3],[2,2,1],[3,3,7],[2,2,1],[1,2,9],[1,2,8]]);
maximizeTheProfit(4, [[0,0,5],[3,3,1],[1,2,5],[0,0,7]]);
maximizeTheProfit(9, [
    [2, 3, 4],
    [7, 7, 8],
    [2, 5, 3],
]);
