// https://leetcode.com/problems/find-original-array-from-doubled-array/   (40.5%)

var groupThePeople = function (groupSizes) {
    const freqs = new Map();
    const result = [];

    for (let index = 0; index < groupSizes.length; index++) {
        const size = groupSizes[index];
        const curr = freqs.get(size);
        if (freqs.has(size)) {
            curr.push(index);
        } else {
            freqs.set(size, [index]);
        }

        if (freqs.get(size).length === size) {
            result.push(freqs.get(size));
            freqs.set(groupSizes[index], []);
        }
    }

    return result;
};