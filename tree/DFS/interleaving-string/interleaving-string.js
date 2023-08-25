// https://leetcode.com/problems/interleaving-string/  (38.4%)

var isInterleave = function (s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false;

    let result = false;
    const memozieds = Array.from({length: s1.length}, () => Array.from({length: s2.length}, () => null))
    
    function dfs(index1, index2){
        const index3 = index1 + index2;
        if(result) return;
        if(index1 >= s1.length){
            return s3.slice(index3) === s2.slice(index2)
        }
        if(index2 >= s2.length){
            return s3.slice(index3) === s1.slice(index1)
        }

        if(index3 === s3.length - 1) {
            result = true;
            return true
        }
        if(memozieds[index1][index2] !== null) return memozieds[index1][index2];

        let left = false, right = false;
        if(s3[index3] === s1[index1] && index1 < s1.length){
            left = dfs(index1 + 1, index2);
        }
        
        if(s3[index3] === s2[index2] && index2 < s2.length){
            right = dfs(index1, index2 + 1);
        }

        memozieds[index1][index2] = left || right
        return left || right
    }

    return dfs(0,0,0)
};



isInterleave("aabcc",  "dbbca",  "aadbbcbcac")
// isInterleave("aabcc",  "dbbca",  "aadbbbaccc")
// isInterleave("abababababababababababababababababababababababababababababababababababababababababababababababababbb",  "babababababababababababababababababababababababababababababababababababababababababababababababaaaba",  "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb")

// --> Only pass 308 / 312
// Complexity: O(N^2)
// Mem: O(N^2)

// Reference 2 pointer to solve this problem

