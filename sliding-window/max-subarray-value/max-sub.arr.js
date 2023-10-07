function maxSubarrayValue(arr) {
    const memozieds = []
    let counter = 0;

    // caculate solution at a pair index
    function caculate(x, y){
        if(x === 0 || x === y) return Math.abs(memozieds[y])**2
        return Math.abs(memozieds[y] - memozieds[x - 1])**2
    }

    // caculate solution start 0 index --> n index
    for (let index = 0; index < arr.length; index++) {
        counter += index %2 === 0 ? arr[index] : -arr[index];
        memozieds.push(counter)
    }

    let max = -Infinity;
    for (let i = 0; i < memozieds.length; i++) {
        for (let j = i; j < memozieds.length; j++) {
            max = Math.max(caculate(i, j), max)
        }
    }

    return max;
}

// maxSubarrayValue([-1,4,2]) 
// maxSubarrayValue([-1,2,3,4,-5]) // ---> (4 + 5)^2 = 81
// maxSubarrayValue([-6,10,-1,2,10,-1]) // ---> (4 + 5)^2 = 81
maxSubarrayValue([-7, 5, -1, -4, -10, -8, 10]) // ---> (4 + 5)^2 = 81
maxSubarrayValue([763,77,449,310,787,-656,-204,-709,-270,76,-267,184,170,-985,33,-822,666,418,26,-247,898,-104,85,-146,980,631,359,908,-560,-744,-764,836,-103,-531,-116,316,681,-148,226,206,-439,-961,-792,598,-629,-705,-479,-494,-169,608,-921,348,729,-100,-970,742,131,-766,522,987,968,-650,-929,-119,810,-562,-229,-792,362,-738,565,643,-131,285,-33,964]) // ---> (4 + 5)^2 = 81



