// https://leetcode.com/problems/count-symmetric-integers/   (73.3%)

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {

    function isSynmetric(num){
        const str = String(num);

        if(str.length%2 !== 0) return 0;

        let result = 0;
        let mid = str.length/2;

        while(num){
            if(mid > 0){
                result += num%10;
            }else{
                result -= num%10;
            }

            mid--;
            num = Math.floor(num/10);
        }

        return result === 0
    }
    return Array.from({length: high - low + 1}, (_, i) => i + low).reduce((acc, curr) => acc += isSynmetric(curr) ? 1 : 0, 0)
};
console.log(countSymmetricIntegers(1, 100))
console.log(countSymmetricIntegers(1200, 1230))
