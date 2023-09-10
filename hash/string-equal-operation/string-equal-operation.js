// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/  (45.5%)

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    if(s1 === s2) return true;

    if(s1[0] + s1[3] + s1[2] + s1[1] === s2) return true
    
    if(s1[2] + s1[3] + s1[0] + s1[1] === s2) return true

    if(s1[2] + s1[1] + s1[0] + s1[3] === s2) return true
    
    return false;
};

console.log(canBeEqual("abcd", "cdab"))
console.log(canBeEqual("abcd", "dacb"))
