// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to   (86.9%)

var findOriginalArray = function (changed) {
    if (changed.length % 2 !== 0) return [];
    changed.sort((a, b) => b - a);

    const visiteds = new Map();
    const result = [];

    for (const num of changed) {
        if(!num){
            if(visiteds.get(0) === 1){
                result.push(0);
                visiteds.set(0, 0)
            }else{
                visiteds.set(0, 1)
            }
            continue;
        }

        if (visiteds.get(num * 2) > 0) {
            result.push(num);
            visiteds.set(num * 2, visiteds.get(num * 2) - 1);
        } else {
            visiteds.set(num, (visiteds.get(num) || 0) + 1);
        }
    }
    return result.length === changed.length / 2 ? result : [];
};