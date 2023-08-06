// https://leetcode.com/problems/3sum/  (33.0%)

// Back tracking DFS
export const threeSum = function (nums) {

    const result = [];

    const setResult = new Set();
    
    function traverse(visiteds, total, startIndex){
        if(visiteds.length > 3) return;
        if(visiteds.length === 3 && total === 0){
            const resultStr = [...visiteds].sort().toString();

            // existed result;
            if(setResult.has(resultStr)) return;

            result.push([...visiteds]);
            setResult.add(resultStr)
            return;
        }

        for (let index = startIndex; index < nums.length; index++) {
            
            visiteds.push(nums[index])

            traverse(visiteds, total + nums[index], index + 1)
            
            visiteds.pop()
            
        }
    }
    
    traverse([], 0, 0)
    return result
};


// --> Only pass 308 / 312
// Complexity: O(N^2)
// Mem: O(N^2)

// Reference 2 pointer to solve this problem

