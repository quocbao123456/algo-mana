// https://leetcode.com/problems/edit-distance/ (55.3%)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    if (!word1) return word2.length;
    if (!word2) return word1.length;

    const height = word1.length + 1;
    const width = word2.length + 1;

    const dp = Array.from({ length: height }, () =>
        Array.from({ length: width })
    );

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (!i) {
                dp[i][j] = j;
                continue;
            }
            if (!j) {
                dp[i][j] = i;
                continue;
            }

            if (word1[x - 1] === word2[y - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
                continue;
            }
            dp[i][j] =
                Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
    }
    return dp[height - 1][width - 1];
};

minDistance("ros", "horse");
minDistance("execution", "intention");

minDistance(
    "pneumonoultramicroscopicsilicovolcanoconiosis",
    "ultramicroscopically"
);
