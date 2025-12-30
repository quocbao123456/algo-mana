/**
 * @param {number} n
 * @param {number[]} present
 * @param {number[]} future
 * @param {number[][]} hierarchy
 * @param {number} budget
 * @return {number}
 */
var maxProfit = function (n, present, future, hierarchy, budget) {
    const relations = new Map(Array.from({length: n}, (_, index) => [index, []])); 
    for(const hi of hierarchy){
        const [parent, child] = hi;

        relations.get(parent - 1).push(child - 1);
    }


    function dfs(nodeIndex, offsetBudget, isParentBuy){
        console.log("nodeIndex", nodeIndex, offsetBudget, isParentBuy)
        if(offsetBudget < 0) return -Infinity;        

        const childs = relations.get(nodeIndex);
        let result = 0;
        for(const child of childs){
            const buy = isParentBuy ? (future[nodeIndex] - Math.floor(present[nodeIndex]/2)) + dfs(child, offsetBudget - Math.floor(present[nodeIndex]/2), true) 
                                    : (future[nodeIndex] - present[nodeIndex]) + dfs(child, offsetBudget - present[nodeIndex], true)
            const noBuy = dfs(child, offsetBudget, false)
            console.log("buy", buy, "noBuy", noBuy, (future[nodeIndex] - Math.floor(present[nodeIndex]/2)), (future[nodeIndex] - present[nodeIndex]))
            result = Math.max(buy, noBuy)
        }
        return result;
    }

    return dfs(0, budget, false);
};

console.log(maxProfit(3, [4,6,8], [7,9,11], [[1,2],[1,3]], 10))