/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
    var minSubarray = function(nums, p) {
        
        const prefixSum = new Array(nums.length).fill(0);
        let total = 0;

        for(let i = 0; i < nums.length; i++){
            total += nums[i];
            prefixSum[i] = total%p;
        }

        total %= p;

        if(!(prefixSum[prefixSum.length - 1]%p)) return 0;

        const indexes = new Map();
        for (let index = 0; index < prefixSum.length; index++) {
            if(!indexes.has(prefixSum[index])){
                indexes.set(prefixSum[index], [index])
            }else{
                indexes.get(prefixSum[index]).push(index);
            }
        }

        console.log(prefixSum, total)

        let result = nums.length
        for (let index = 0; index < prefixSum.length; index++) {
    
            // Find result  ;
            const target = prefixSum[index];
            const target2 = (target - total)%p;
            const target3 = (target + total)%p;

            if(!target) result = Math.min(result, nums.length - index - 1)
            const origins = indexes.get(target2);
            const origins1 = indexes.get(target3);


            for(const indexOrigin of origins || []){
                if(indexOrigin < index) continue;

                result = Math.min(result, indexOrigin - index);
            } 

            for(const indexOrigin of origins1 || []){
                if(indexOrigin < index) continue;

                result = Math.min(result, indexOrigin - index);
            } 
        };

        console.log("result", result)
        
        return result === nums.length ? -1 : result
    };


minSubarray([3,1,4,2], 6)
minSubarray([6,3,5,2], 9)
minSubarray([4,5,8,5,4], 9)
minSubarray([3,6,8,1]    , 8)
minSubarray([8,32,31,18,34,20,21,13,1,27,23,22,11,15,30,4,2]    , 148)