/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const result = Array.from({length: s.length}, (_, index) => s.charAt(index) === c ? 0 : null);

    const stack = [];
    let startIndex = 0;

    while(startIndex < s.length){
        if(s.charAt(startIndex) !== c){
            stack.push([s.charAt(startIndex), startIndex]);
            startIndex++;
            continue;
        }

        const bottom = stack[0] && stack[0][0] === c ? stack[0][1] : Infinity;
        while(stack.length){
            const top = stack.pop();

            result[top[1]] = Math.min(Math.abs(startIndex - top[1]), Math.abs(bottom - top[1]));
        }

        stack.push([c, startIndex]);
        startIndex++;
    }


    if(stack[stack.length - 1][0] !== c){
        const bottom = stack[0][0] === c ? stack[0][1] : Infinity;
        
        while(stack.length){
            const top = stack.pop();

            result[top[1]] = top[1] - bottom;
        }
    }
    console.log(result)
    return result;
};
// shortestToChar("decce", "e") 

// shortestToChar("decc", "e") 
shortestToChar("edecc", "e") 
