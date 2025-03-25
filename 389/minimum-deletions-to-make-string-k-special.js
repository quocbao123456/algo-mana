/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    const freqs = new Map();
    for(const char of word){
        freqs.set(char, (freqs.get(char) || 0) + 1);
    }

    const sortedFreqs = [...freqs.values()].sort((a, b) => a - b);
    let result = Infinity;

    for (let startIndex = 0; startIndex < sortedFreqs.length; startIndex++) {
        let tmpCount = 0;
        const start = sortedFreqs[startIndex];
        const limit = start + k;


        for (let index = 0; index < startIndex; index++) {
            tmpCount += sortedFreqs[index];
        }

        for (let j = startIndex ; j < sortedFreqs.length; j++) {
            if(sortedFreqs[j] > limit){
                tmpCount += sortedFreqs[j] - limit;
            }
        }

        console.log("result", limit, tmpCount)
        result = Math.min(tmpCount, result)
    };

    return result;
};

minimumDeletions("rprrrrrrrrrp", 0)