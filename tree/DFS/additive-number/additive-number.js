// https://leetcode.com/problems/additive-number/   (31.2%)
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    let result = false;
    function isValid(str){
        return str.length < 2 || str[0] !== "0";
    }

    function dfs(visiteds, startIndex){
        if(result) return;

        if(startIndex >= num.length) {
            if(visiteds.length > 2) result = true
            return;
        }
        const prev2 = visiteds[visiteds.length - 2] || ""
        const prev1 = visiteds[visiteds.length - 1] || ""

        const minNextStep = startIndex + (visiteds.length >= 2 ? (prev1.length - 1): 0);

        for (let index = minNextStep; index <=num.length; index++) {
            const element = num.slice(startIndex, index + 1);

            if((Number(element) === Number(prev1) + Number(prev2) || visiteds.length < 2) && isValid(element)){
                visiteds.push(element);
                dfs(visiteds, index + 1);
                visiteds.pop();
            }
        }
    }

    dfs([], 0)
    return result
};
isAdditiveNumber("000")

// isAdditiveNumber("199100")
// isAdditiveNumber("199100199")
// isAdditiveNumber("1023")
// isAdditiveNumber("101")
// isAdditiveNumber("198019823962")
// isAdditiveNumber("199001200")
