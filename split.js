/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    function dp(x, y, existeds){

        if(y >= s.length){
            console.log("substring", x, y, JSON.stringify([...existeds, s.substring(x)]))

            return existeds.length;
        }
        const curr = s.substring(x, y);

        const choose = existeds.includes(curr) ? -Infinity : dp(y, y + 1, [...existeds, curr]);
        const noChoose = dp(x, y + 1, existeds);

        return Math.max(choose, noChoose)
    }

    return dp(0, 1, [])
};

console.log(maxUniqueSplit("ababccc"))
