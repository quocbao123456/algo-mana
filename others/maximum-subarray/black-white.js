/**
 * @param {string} s
 * @return {number}
 */

const BLACK = "1";
const WHITE = "0";

var minimumSteps = function(s) {
    const balls = s.split("");
    
    let weightBefore = 0;
    let weightAfter = 0;
    let countWhite = 0;

    for (let index = 0; index < balls.length; index++) {
        const element = balls[index];

        if(element === BLACK){
            weightBefore += index;
        }else{
            countWhite++;
        }
    }

    weightAfter = (balls.length - 1)*balls.length/2 - countWhite*(countWhite - 1)/2;

    return weightAfter - weightBefore
};

minimumSteps("101001")
minimumSteps("0111")
minimumSteps("100")
