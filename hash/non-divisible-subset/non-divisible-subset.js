// https://www.hackerrank.com/challenges/non-divisible-subset/problem
export const nonDivisibleSubset = function (k, s) {
    const mapDivides = new Map();
    if(k === 1) return 1;
    for (const num of s) {
        const mod = num%k;
        if(mapDivides.has(mod)){
            mapDivides.get(mod).push(num);
        }else{
            mapDivides.set(mod, [num]);
        }
    }

    let result = 0
    for (const key of mapDivides.keys()) {
        if(key === k/2 || key === 0){
            result += mapDivides.get(key).length > 0 ? 1 : 0;
            continue;
        }

        const freq1 = mapDivides.get(key).length;
        const freq2 = mapDivides.has(k - key) ? mapDivides.get(k - key).length : 0

        result += Math.max(freq1, freq2);

        mapDivides.delete(key);
        mapDivides.delete(k - key);
    }
    return result;
};

// Complexity: N
// Mem: N


