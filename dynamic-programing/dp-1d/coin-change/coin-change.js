// https://leetcode.com/problems/coin-change  (42.6%)


// Leet eyes on it with BFS
// export const coinChange = function (coins, amount) {
//     if(amount === 0) return 0;
//     if(amount < 0) return -1;

//     let queue = [0];
//     let level = 0;

//     while(queue.length){
//         const nextLevel =[];
//         level++;
//         while(queue.length){
//             const curr = queue.shift();
//             for (const coin of coins) {
//                 if(curr + coin === amount) return level;
//                 if(curr + coin < amount){
//                     nextLevel.push(curr + coin);
//                 }
//             }
//         }
//         queue = nextLevel;
//     }

//     return -1;
// };   

// Complexity: O(M^N)  M: length of coin, N: amount--> so poor with big amount
// Mem: O(1)

// const coinChange = function (coins, amount) {
//     if(!amount) return 0;
//     const memozieds = new Map();

//     function dp(n){
//         if(n === 0) return 0;
//         if(n < 0) return Infinity;

//         if(memozieds.has(n)) return memozieds.get(n);
        
//         let min = Math.min(...coins.map((item) => dp(n - item) + 1));
//         memozieds.set(n, min)

//         return min;
//     }

//     const result = dp(amount);
//     return result === Infinity ? -1 : result 
// };

// Complexity: O(N*M) 
// Mem: O(N*M)

// --> PASSED

// DP Bottom-up
export const coinChange = function (coins, amount) {
    if(!amount) return 0;
   
    const memozieds = Array.from({length: amount}, (_, i) => i + 1);

    for (let index = 0; index < memozieds.length; index++) {
        // memozieds[index] = Math.min(...coins.map((price) => {
        //     if(memozieds[index] === price) return 1;

        //     return memozieds[index] - price < 0 ? Infinity : memozieds[memozieds[index] - price - 1] + 1; 
        // }))
        // --> Avoid use rest param --> poor performance

        let min = Infinity;
        for (const coin of coins) {
            if(memozieds[index] === coin) {
                min = 1
                break;
            };
            if(memozieds[index] - coin < 0) continue;
            min = Math.min(min, memozieds[index - coin] + 1);
        }
        memozieds[index] = min;
    }

    return memozieds[amount - 1] === Infinity ? -1 : memozieds[amount - 1];
};
