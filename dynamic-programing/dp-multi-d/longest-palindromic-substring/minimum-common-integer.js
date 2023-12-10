function minimumCommonInterger(nums){

   
}


function minimumCommonWithLength(nums, limit){
    if(nums.length <= limit) return -1;
    
    const visiteds = new Map();
    function count(num){
        visiteds.set(num, (visiteds.get(num) || 0) + 1)
    }

    function remove(num){
        if(!visiteds.has(num)) return;

        if(visiteds.get(num) === 1){
            visiteds.delete(num);
        }else{
            visiteds.set(num, (visiteds.get(num) || 0) - 1)
        }
    }


    let startIndex = 0;
    for (let index = 0; index < nums.length; index++) {
        const currSizeWindow = index - startIndex + 1;
        
        if(currSizeWindow < limit){
            count(nums[index]);
        }else{
            if(nums[index] !== nums[startIndex]){
                remove(nums[index]);
            }
            startIndex++;
        }
    }
}

minimumCommonInterger([4,3,3,4,2])