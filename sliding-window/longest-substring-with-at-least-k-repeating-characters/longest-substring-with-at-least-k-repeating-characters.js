// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters (44.8%)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var longestSubstring = function (s, k) {
//     function dnc(str) {
//         const freqs = new Map();

//         for (const char of str) {
//             freqs.set(char, (freqs.get(char) || 0) + 1);
//         }
        
//         for (let index = 0; index < s.length; index++) {
//             const curr = str[index];

//             if (freqs.get(curr) < k) {
//                 return Math.max(dnc(str.slice(0, index)), dnc(str.slice(index + 1)))
//             }
//         }

//         return str.length;
//     }

//     return dnc(s);
// };
var longestSubstring = function (s, k) {
   
    const numUniqueChar = new Set(s.split("")).size;
    let result = 0;

    for (let limit = 1; limit <= numUniqueChar; limit++) {

        const freqs = new Map();
        
        let startIndex = 0;
        for (let index = 0; index < s.length; index++) {
            const char = s[index];
            freqs.set(char, (freqs.get(char) || 0) + 1);

            while(freqs.size > limit){
                if(freqs.get(s[startIndex]) === 1){
                    freqs.delete(s[startIndex]);
                    startIndex++;
                    continue;
                }
                freqs.set(s[startIndex], freqs.get(s[startIndex]) - 1)
                startIndex++;
            }
            if([...freqs.values()].every((item) => item >= k)) result = Math.max(result, index - startIndex + 1)
        }
    }

    return result;
};
