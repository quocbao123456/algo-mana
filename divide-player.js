/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const total = skill.reduce((acc, curr) => acc + curr,0);

    const target = total/(skill.length/2);

    const freqs = new Map();

    for (const element of skill) {
        freqs.set(element, (freqs.get(element) || 0) + 1);
    }

    let result = 0;

    for (const element of skill) {
        if(!freqs.has(element)) continue;

        if(freqs.has(target - element)){

            freqs.set(target - element, freqs.get(target - element) - 1)
            freqs.set(element, freqs.get(element) - 1);

            if(!freqs.get(target - element)) freqs.delete(target - element)
            if(!freqs.get(element)) freqs.delete(element)

            result += (target - element)*element;
        }
    }

    if(freqs.size) return -1;
    
    return result
};

dividePlayers([3,2,5,1,3,4])