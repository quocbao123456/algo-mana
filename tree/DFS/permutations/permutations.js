// https://leetcode.com/problems/permutations/  (76.9%)

export const permute = function (nums) {
    const result = [];
    const params = new Set(nums)

    function dfs(visiteds, cases){
        if(!cases.size){
            result.push([...visiteds]);
            return;
        }

        const rest = [...cases]
        // noteds: get remained values before loop

        for (const num of rest) {
            visiteds.push(num);
            cases.delete(num);

            dfs(visiteds, new Set([...cases]));

            visiteds.pop();
            cases.add(num)
        }
    }

    dfs([], params)
    return result
};

// Complexity: O(N^N) 
// Mem: O(N^N)
