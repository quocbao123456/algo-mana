
// https://leetcode.com/problems/combinations/   (68.9%)
var combine = function(n, k) {
    const result = [];

    function dfs(visiteds, counter, startIndex){

        
        if(counter > k) return;
        if(counter === k) {
            result.push([...visiteds]);
            return;
        };


        for (let index = startIndex; index < n; index++) {
            const element = index + 1;

            visiteds.push(element);
            dfs(visiteds, counter + 1, index + 1);
            visiteds.pop();
            
        }
    }  

    dfs([], 0, 0)

    return result;
};
