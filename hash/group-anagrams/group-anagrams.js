// https://leetcode.com/problems/group-anagrams/    (66.8%)

export const groupAnagrams = function (strs) {
    const anagrams = new Map();

    function getKey(str){
        return str.split("").sort().join("");
    }

    for (const str of strs) {
        const key = getKey(str)
        if(anagrams.has(key)){
            anagrams.get(key).push(str);
        }else{
            anagrams.set(key, [str])
        }
    }
    return [...anagrams.values()];
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// Complexity: N*MLogM (M: length of word)
// Mem: N