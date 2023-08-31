// https://leetcode.com/problems/course-schedule/   (46.2%)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const links = new Map();
    for (const pre of prerequisites) {
        if (links.has(pre[0])) {
            links.get(pre[0]).push(pre[1]);
        } else {
            links.set(pre[0], [pre[1]]);
        }
    }

    const visiteds = new Set();
    function dfs(course) {
        if(!links.has(course)) return true;

        if(visiteds.has(course)) {
            return false;}
        
        visiteds.add(course)   
        const nextSteps = links.get(course);
        if (!nextSteps) return true;

        for (const next of nextSteps) {
            if (!dfs(next)) return false;
        }

        links.delete(course)

        return true;
    }

    for (let course = 0; course < numCourses; course++) {
        if(!dfs(course)) return false;
    }

    return true;
};

// console.log(canFinish(700, a));

// console.log(canFinish(2, [[1, 0]]));
// console.log(canFinish(2, [[1,0],[0,1]]))
// console.log(
//     canFinish(3, [
//         [1, 0],
//         [0, 2],
//         [2, 1],
//     ])
// );

console.log(
    canFinish(3, [[1,4],[2,4],[3,1],[3,2]])
);


// 1 -> 4
// 2 -> 4
// 3 -> 1 2