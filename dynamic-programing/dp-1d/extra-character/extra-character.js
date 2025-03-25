/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const words = new Set(dictionary);

    console.log(words)
    function dp(start, end){
     
        if(start >= s.length){
            return words.has(s.substring(start, end)) ? 0: 1
        }
   
        const moveStart = start < end ? (dp(start + 1, end) + 1) : Infinity;
        const moveEnd = end < s.length ? dp(start, end + 1) : Infinity;

        if(words.has(s.substring(start, end + 1))){
            console.log(s.substring(start, end + 1), start, end)
        }
        const choose = words.has(s.substring(start, end + 1)) ? dp(end , end) : Infinity;

       
        
        return Math.min(moveStart, moveEnd, choose);
    }

    return dp(0, 0)
};
console.log("minExtraChar", minExtraChar("1leetscodes", ["leet","code","leetcode"]))

