// https://leetcode.com/problems/gas-station/   (45.9%)
var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let distance = 0;
    let startIndex = 0;

    for (let index = 0; index < gas.length; index++) {
        totalGas += gas[index];
        totalCost += cost[index];

        const next = index === gas.length - 1 ? 0 : index + 1;
        const currDis = gas[next] - cost[index];

        distance += gas[next] - cost[index];

        if (distance >= 0 && currDis > 0) startIndex = index;
    }

    return totalGas >= totalCost ? startIndex : -1;
};
console.log(canCompleteCircuit([1,2,3,4,5],  [3,4,5,1,2]))

console.log(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1]));
console.log(canCompleteCircuit([5,8,2,8], [6,5,6,6]));
console.log(canCompleteCircuit([7,1,0,11,4], [5,9,1,2,5]));
