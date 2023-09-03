// https://leetcode.com/problems/unique-paths   (63.3%)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    const dp = Array.from({length: m}, () => Array.from({length: n}, () => 0));

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(!i || !j) {
                dp[i][j] = 1;
                continue;
            }
            
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1]
};