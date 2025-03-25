/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const chars = String(num).split("").map((char) => Number(char));

    function swap(i, j){
        const tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }

    const stack1 = [];
    for (let index = 0; index < chars.length; index++) {
        if(!stack1.length){
            stack1.push([chars[index], index]);
            continue;
        }

        if(chars[index] >= stack1[stack1.length - 1][0]) continue;

        stack1.push([chars[index], index]);
    }
    

    const stack2 = [];
    for (let index = chars.length - 1; index >= 0; index--) {
        if(!stack2.length){
            stack2.push([chars[index], index]);
            continue;
        }

        if(chars[index] <= stack2[stack2.length - 1][0]) continue;

        stack2.push([chars[index], index]);
    }

    for (let i = 0; i < stack1.length; i++) {
        for (let j = stack2.length - 1; j >= 0; j--) {
            if(stack2[j][0] > stack1[i][0] && stack2[j][1] > stack1[i][1]) {
                console.log("dsa")
                swap(stack1[i][1], stack2[j][1]);
                return Number(chars.join(""))
            }
        }
    }

    return num
};

console.log(maximumSwap(12))
console.log(maximumSwap(2736))
console.log(maximumSwap(9973))

