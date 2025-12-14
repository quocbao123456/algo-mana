// https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor

/**
 * @param {string} corridor
 * @return {number}
 */
const LIMIT = 1000000007
var numberOfWays = function(corridor) {
    let result = 1;
    let count = 0;
    let countTree = 0;
    for(let i = 0; i < corridor.length; i++){
        if(corridor[i] === "S"){
            if(count === 2){
                result *= (countTree + 1);
                result %= LIMIT
                countTree = 0;
                count = 0;
            }
            count++;
        }else{
            if(count === 2) countTree++;
        }
    }

    return count < 2 ? 0 : result
};