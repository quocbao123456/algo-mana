/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    const vovewls = new Set(['a', 'e', 'i', 'o', 'u']);
    const existedVovewls = new Map()

    let startIndex = 0;
    let endIndex = 0;

    while(startIndex < word.length){

        const curr = word.charAt(startIndex);
        if(vovewls.has(curr)){
            existedVovewls.set(curr, (existedVovewls.get(curr) || 0) + 1);
        }
        
        if(existedVovewls.keys().length === 5){
            
            let start

        }


        startIndex++;

    }
};

countOfSubstrings("ieaouqqieaouqq", 1)