/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
// var countSubstrings = function(s, c) {
//     let count = 0;
//     for (let startIndex = 0; startIndex < s.length; startIndex++) {
//         if(s[startIndex] !== c) continue;
        
//         for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
//             if(s[endIndex] !== c) continue;

//             count++
//         }
//     }
//     return count
// };

var countSubstrings = function(s, c) {
    let count = 0
    for(let index = 0; index < s.length; index++){
        if(s[index] === c) count++;
    }

    return count*(count+1)/2
};
countSubstrings("abada", "a")