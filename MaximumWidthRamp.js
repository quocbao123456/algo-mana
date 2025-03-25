var maxWidthRamp = function (nums) {
    const stack = [];
    const stack1 = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (!stack.length) {
            stack.push([element, index]);
            continue;
        }

        if (element >= stack[stack.length - 1][0]) continue;
        stack.push([element, index]);
    }

    for (let index = nums.length - 1; index >= 0; index--) {
        const element = nums[index];

        if (!stack1.length) {
            stack1.push([element, index]);
            continue;
        }

        if (element <= stack1[stack1.length - 1][0]) continue;
        stack1.push([element, index]);
    }

    console.log(JSON.stringify(stack), JSON.stringify(stack1))


    let result = 0;
    let max = -Infinity;
    for (let index = 0; index < stack1.length; index++) {
        if (stack1[index][0] <= max) continue;
        max = Math.max(stack1[index][0], max);

        for (let i = 0; i < stack.length; i++) {
            if(stack1[index][1] < stack[i][1]) {
                break;
            }
            if (stack1[index][0] >= stack[i][0]) {
                result = Math.max(stack1[index][1] - stack[i][1], result);
                break;
            }
        }
    }
    return result;
};

// console.log(maxWidthRamp([6,0,8,2,1,5]))
// console.log(maxWidthRamp([2,2,1]))

// console.log(maxWidthRamp([3,2,4,1]))

// console.log(maxWidthRamp([6, 7, 8, 8, 6, 5, 5, 8, 2, 2]));
// console.log(maxWidthRamp([10,10,10,7,1,6,2,1,7]))
// console.log(maxWidthRamp([9,8,1,0,1,9,4,0,4,1]

// ))
console.log(maxWidthRamp([9,8,7,6,5,4,3,2,1]))
