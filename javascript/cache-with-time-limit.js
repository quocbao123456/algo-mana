var TimeLimitedCache = function() {
    this.pairs = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let result = false;
    if(this.pairs.has(key)){
        clearTimeout(this.pairs.get(key).timer);
        result = true;
    }

    const timer = setTimeout(() => {
        this.pairs.get(key).exprired = true;
    }, duration)
    this.pairs.set(key, {value, duration, exprired: false, timer});

    return result;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(!this.pairs.has(key)) return -1;

    const result = this.pairs.get(key);
    if(result.exprired) return -1;

    return result.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let result = 0;
    for (const val of this.pairs.values()) {
        if(!val.exprired) result++;
    }
    return result
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */