// https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/  (33.8%)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    if(!s) return '';

    function isGreaterLexical(x, y){
        return Number(x) > Number(y)
    }

    const stack = []
    let endIndex = 0;
    let result = s;
    let flag = false;

    while(endIndex < s.length){
        if(s[endIndex] === '1') {
            stack.push(endIndex)
        }

        if(stack.length === k) {
            flag = true;

            let str = s.slice(stack[0], endIndex + 1);
            result = isGreaterLexical(str, result) ? result : str;

            // move start index
            stack.shift()
        }
        endIndex++;
    }
    return flag ? result : "" 
};

