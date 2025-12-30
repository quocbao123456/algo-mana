// Example 1:

// Input: prices = [1,7,9,8,2], k = 2

// Output: 14

// Explanation:

// We can make $14 of profit through 2 transactions:
// A normal transaction: buy the stock on day 0 for $1 then sell it on day 2 for $9.
// A short selling transaction: sell the stock on day 3 for $8 then buy back on day 4 for $2.
// Example 2:

// Input: prices = [12,16,19,19,8,1,19,13,9], k = 3

// Output: 36

// Explanation:

// We can make $36 of profit through 3 transactions:
// A normal transaction: buy the stock on day 0 for $12 then sell it on day 2 for $19.
// A short selling transaction: sell the stock on day 3 for $19 then buy back on day 4 for $8.
// A normal transaction: buy the stock on day 5 for $1 then sell it on day 6 for $19

// [14,6,10,19] k = 1
// 13

/**
 * ORIGINAL SOLUTION - O(n²k) complexity (TOP-DOWN)
 * 
 * Tracks exact buy/sell price, which requires O(n²k) state space.
 * Uses recursive memoization (top-down approach).
 * 
 * Time: O(n²k) - n days × k transactions × n possible prices
 * Space: O(n²k) - memoization map
 */
function maxProfitOriginal(prices, k) {
    const visiteds = new Map();

    function dp(index, k, price) {
        if(k === 0) return 0;
        if(index === prices.length) return 0;

        const key = `${index}-${k}-${price}`;
        if(visiteds.has(key)) return visiteds.get(key);

        const skip = dp(index + 1, k, price);
        const buyOrSell = price === 0 ? dp(index + 1, k, prices[index]) : -Infinity;
        const markProfit = price === 0 ? -Infinity : (Math.abs(prices[index] - price) + dp(index + 1, k - 1, 0));

        const result =  Math.max(buyOrSell, skip, markProfit);
        visiteds.set(key, result);

        return result;
    }

    return dp(0, k, 0)
}

/**
 * OPTIMIZED TO O(n*k) using state machine approach (TOP-DOWN)
 * 
 * Instead of tracking exact buy/sell prices, we track:
 * - State 0: Not holding
 * - State 1: Holding (bought)
 * - State 2: Short position (sold)
 * 
 * We track the maximum profit achievable in each state.
 * When transitioning, we calculate profit from price differences.
 * Uses recursive memoization (top-down approach).
 * 
 * Time: O(n*k) - n days × k transactions × 3 states = O(n*k)
 * Space: O(n*k) - memoization table
 */
function maxProfit(prices, k) {
    const n = prices.length;
    if (n === 0 || k === 0) return 0;
    
    // memo[i][rk][state] = max profit from day i to end with rk transactions
    // state: 0 = not holding, 1 = holding (bought), 2 = short (sold)
    const memo = Array(n + 1).fill(null).map(() => 
        Array(k + 1).fill(null).map(() => 
            Array(3).fill(null)
        )
    );
    
    function dp(i, rk, state) {
        // Base cases
        if (rk === 0) {
            // No transactions left, can only be in state 0 (not holding)
            if (state === 0) return 0;
            return -Infinity;
        }
        if (i === n) {
            // At the end, must not hold any position
            if (state === 0) return 0;
            return -Infinity;
        }
        
        if (memo[i][rk][state] !== null) {
            return memo[i][rk][state];
        }
        
        let result = -Infinity;
        
        if (state === 0) {
            // Not holding: can skip, buy, or short sell
            result = Math.max(
                dp(i + 1, rk, 0), // Skip
                dp(i + 1, rk, 1) - prices[i], // Buy (start normal transaction) - pay price
                dp(i + 1, rk, 2) + prices[i]    // Short sell (start short transaction) - receive price
            );
        } else if (state === 1) {
            // Holding: can skip (keep holding) or sell (complete transaction)
            result = Math.max(
                dp(i + 1, rk, 1), // Keep holding
                dp(i + 1, rk - 1, 0) + prices[i] // Sell (complete normal transaction) - receive price, use 1 transaction
            );
        } else { // state === 2
            // Short position: can skip (keep short) or buy back (complete transaction)
            result = Math.max(
                dp(i + 1, rk, 2), // Keep short
                dp(i + 1, rk - 1, 0) - prices[i] // Buy back (complete short transaction) - pay price, use 1 transaction
            );
        }
        
        memo[i][rk][state] = result;
        return result;
    }
    
    // Start: day 0, k transactions, not holding
    return dp(0, k, 0);
}

// Test cases
console.log("Original O(n²k) - Top-Down:");
console.log(maxProfitOriginal([1,7,9,8,2], 2)); // Expected: 14
console.log(maxProfitOriginal([14,6,10,19], 1)); // Expected: 13
console.log(maxProfitOriginal([12,16,19,19,8,1,19,13,9], 3)); // Expected: 36

console.log("\nOptimized O(n*k) - Top-Down:");
console.log(maxProfit([1,7,9,8,2], 2)); // Expected: 14
console.log(maxProfit([14,6,10,19], 1)); // Expected: 13
console.log(maxProfit([12,16,19,19,8,1,19,13,9], 3)); // Expected: 36

/**
 * COMPLEXITY ANALYSIS for maxProfitOptimize:
 * 
 * State Space:
 *   - index: 0 to n (n+1 possible values)
 *   - k: 0 to k (k+1 possible values)
 *   - state: 0, 1, 2 (3 possible values: not holding, holding, short)
 * 
 * Total unique states: O(n × k × 3) = O(n*k)
 * 
 * Time Complexity: O(n*k)
 *   - Each state (index, k, state) is computed at most once
 *   - Each state computation takes O(1) time (just lookups and comparisons)
 *   - Total: O(n*k) states × O(1) per state = O(n*k)
 * 
 * Space Complexity: O(n*k)
 *   - Memoization map stores at most O(n*k) entries
 *   - Each entry: key string (O(log(n*k)) chars) + value (number)
 *   - Recursion stack: O(n) in worst case
 *   - Total: O(n*k) for memoization + O(n) for stack = O(n*k)
 * 
 * Key Optimization:
 *   - Uses state machine (3 states) instead of tracking exact buy/sell prices
 *   - This reduces state space from O(n²k) to O(n*k)
 *   - State transitions handle profit calculation implicitly
 * 
 * State Transitions:
 *   - State 0 (not holding): can skip, buy (→ state 1), or short sell (→ state 2)
 *   - State 1 (holding): can skip, or sell (→ state 0, uses 1 transaction)
 *   - State 2 (short): can skip, or buy back (→ state 0, uses 1 transaction)
 */
function maxProfitOptimize(prices, k) {
    const memoizeds = Array(prices.length).fill(null).map(() => 
        Array(k + 1).fill(null).map(() => 
            Array(3).fill(null)
        )
    );

    function dp(index, k, state) {
        if(k === 0) return state === 0 ? 0 : -Infinity;
        if(index === prices.length) return state === 0 ? 0 : -Infinity;

        const key = `${index}-${k}-${state}`;
        if(memoizeds[index][k][state] !== null) return memoizeds[index][k][state];
        let buy = -Infinity;
        let sell = -Infinity;
        let skip = dp(index + 1, k, state);
        switch(state){
            case 0:
                buy = dp(index + 1, k, 1) - prices[index];
                sell = dp(index + 1, k, 2) + prices[index];
                break;
            case 1:
                sell = dp(index + 1, k - 1, 0) + prices[index];
                break;
            case 2:
                buy = dp(index + 1, k - 1, 0) - prices[index];
                break;
        }

        const result = Math.max(buy, skip, sell);
        memoizeds[index][k][state] = result;
        return result;
    }

    return dp(0, k, 0)
}


function maxProfitOptimizeBottomUp(prices, k) {
    const memoizeds = Array.from({length: prices.length}, () => Array.from({length: k}, () => Array.from({length: 3}, () => 0)));

    // for(let i = 0; i < prices.length; i++) {
    //     for(let j = 0; j < k; j++) {
    //         for(let state = 0; state < 3; state++) {
    //             let result = -Infinity;
    //             switch(state){
    //                 case 0:
    //                     result = Math.max(result, dp(i - 1, j, 0));
    //                     break;
    //                 case 1:
    //                     result = Math.max(result, dp(i - 1, j, 1) - prices[i]);
    //                     break;
    //                 case 2:
    //                     result = Math.max(result, dp(i - 1, j, 2) + prices[i]);
    //                     break;
    //             }

                
    //         }
    //     }
    // }

    // function dp(index, k, state) {
    //     if(k === 0) return state === 0 ? 0 : -Infinity;
    //     if(index === prices.length) return state === 0 ? 0 : -Infinity;

    //     const key = `${index}-${k}-${state}`;
    //     if(memoizeds.has(key)) return memoizeds.get(key);
    //     let buy = -Infinity;
    //     let sell = -Infinity;
    //     let skip = dp(index + 1, k, state);
    //     switch(state){
    //         case 0:
    //             buy = dp(index + 1, k, 1) - prices[index];
    //             sell = dp(index + 1, k, 2) + prices[index];
    //             break;
    //         case 1:
    //             sell = dp(index + 1, k - 1, 0) + prices[index];
    //             break;
    //         case 2:
    //             buy = dp(index + 1, k - 1, 0) - prices[index];
    //             break;
    //     }

    //     const result = Math.max(buy, skip, sell);
    //     memoizeds.set(key, result);
    //     return result;
    // }

    // return dp(0, k, 0)
}

console.log("\nOptimized O(n*k) - Top-Down:");
console.log(maxProfitOptimize([1,7,9,8,2], 2)); // Expected: 14
console.log(maxProfitOptimize([14,6,10,19], 1)); // Expected: 13
console.log(maxProfitOptimize([12,16,19,19,8,1,19,13,9], 3)); // Expected: 36