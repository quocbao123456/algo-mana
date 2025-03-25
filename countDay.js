/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a, b) => {
        const [startA, endA] = a;
        const [startB, endB] = b;

        if(startA === startB){
            return endA - endB;
        }
        return startA - startB;
    });

    let last = meetings[0];
    let result = meetings[0][0] - 1;

    for (let index = 1; index < meetings.length; index++) {
        const curr = meetings[index];
        const [start, end] = curr;
        
        if(start <= last[1]){
            last[1] = Math.max(end, last[1]);
        }else{
            result += start - last[1] - 1;
            last[1] = end;
        }
    }

    return result + days - last[1];
};

// Input: days = 5, meetings = [[2,4],[1,3]]

console.log(countDays(10, [[1, 4], [2, 5], [7, 9]]))
 // 2
console.log(countDays(57, [[3,49],[23,44],[21,56],[26,55],[23,52],[2,9],[1,48],[3,31]]))


// O(N) Complexity
// O(1) Space

 