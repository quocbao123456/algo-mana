// https://leetcode.com/problems/best-sightseeing-pair  (59.4%)
export const maxScoreSightseeingPair = function (values) {
    if(values.length < 2) return 0;
  
    // xi + i
    let maxLeft = -Infinity; 
    let result = -Infinity;

    for (let index = 0; index < values.length; index++) {
        const currX = values[index] + index;
        const currY = values[index] - index;
    
        result = Math.max(result, currY + maxLeft);

        if(currX > maxLeft){
            maxLeft = currX
        }
    }

    return result;
};

// Complexity: N
// Mem: N