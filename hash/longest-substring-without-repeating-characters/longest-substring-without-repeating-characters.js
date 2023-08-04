// https://leetcode.com/problems/longest-substring-without-repeating-characters/    (33.9%)

// Brute Force (use Set still passed)
// export const lengthOfLongestSubstring = function (s) {
//     let count = 0;
    
//     for (let startIndex = 0; startIndex < s.length; startIndex++) {
//         const existeds = new Set();
//         existeds.add(s[startIndex])
//         for (let i = startIndex + 1; i < s.length; i++) {
//             if(!existeds.has(s[i])) {
//                 existeds.add(s[i]);
//                 continue;
//             }
//             break;
//         }
//         count = Math.max(count, existeds.size)
//     }

//     return count;
// };
// Complexity: 1 + 2 + ... + N = N*(N+1)/2 => N^2  (worst case)
// Mem: N^2

// Siding Window
export const lengthOfLongestSubstring = function (s) {
    if(s.length <= 1) return s.length;
    let count = 0;
    let startIndex = 0;
    let endIndex = 0;

    const existeds = new Set();
    while(endIndex <= s.length - 1){
        if(!existeds.has(s[endIndex])){
            existeds.add(s[endIndex]);
        }else{
            while(s[startIndex] !== s[endIndex]){
                existeds.delete(s[startIndex])
                startIndex++;
            }
            startIndex++;
        }
        count = Math.max(count, existeds.size)
        endIndex++;
    }
    return count;
};

// Complexity: N  (worst case)
// Mem: 1