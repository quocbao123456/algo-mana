// https://leetcode.com/problems/memoize/   (62.5%)

function sum(a, b){
    return a + b
}

function memoize(fn){
    let callCount = 0;
    const memozieds = new Map();

    return function(...args){
        const key = args.toString();
        if(memozieds.has(key)) return memozieds.get(key)

        callCount++;
        const result = fn(...args);
        
        memozieds.set(key, result);
    }
}

const memoizedFn = memoize(sum);

memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(memoizedFn)
