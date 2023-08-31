// https://leetcode.com/problems/check-if-object-instance-of-class/ (29.3%)

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    while(obj !== null && obj !== undefined){
        if(obj.constructor === classFunction){
            return true
        }

        obj = Object.getPrototypeOf(obj);
    }

    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */