/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) {
//     function arroundIndex(x, y){
//         return [
//             ...(x !== 0 ? [[x - 1, y]] : []),
//             ...(x !== board.length - 1 ? [[x + 1, y]] : []),
//             ...(y !== 0 ? [[x,  y - 1]] : []),
//             ...(y !== board[0].length - 1 ? [[x,  y + 1]] : []),
//         ]
//     }

//     function getNextStep(x, y, target){
//         return arroundIndex(x, y).filter((indices) => board[indices[0]][indices[1]] === target)
//     }

//     const getKey = (x, y) => `${x}-${y}`

//     function dfs(curr, word, visiteds){
//         if(!word) return true;

//         const nextChar = word.charAt(0);
//         const nextSteps = getNextStep(curr[0], curr[1], nextChar)

//         for (const next of nextSteps) {
//             const key = getKey(next[0], next[1]);

//             if(visiteds.has(key)) continue

//             visiteds.add(key)
//             if(dfs(next, word.slice(1), visiteds)) return true
//             visiteds.delete(key)
//         }

//         return false
//     }

//     const visiteds = new Set();
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             if(board[i][j] === word[0]) {
//                 visiteds.add(getKey(i, j))
//                 if (dfs([i, j], word.slice(1), visiteds)) return true;
//                 visiteds.delete(getKey(i, j))
//             }
//         }
//     }
//     return false;
// };

var exist = function (board, word) {
    function arroundIndex(x, y) {
        return [
            ...(x !== 0 ? [[x - 1, y]] : []),
            ...(x !== board.length - 1 ? [[x + 1, y]] : []),
            ...(y !== 0 ? [[x, y - 1]] : []),
            ...(y !== board[0].length - 1 ? [[x, y + 1]] : []),
        ];
    }

    function getNextStep(x, y, target, visiteds) {
        return arroundIndex(x, y).filter(
            (indices) => board[indices[0]][indices[1]] === target && !visiteds.has(getKey(indices))
        );
    }


    const getKey = ([x, y]) => `${x}-${y}`;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {

                const stack = [[i, j]];
                const visiteds = new Set();

                let index = 1;

                while (stack.length) {
                    const curr = stack[stack.length - 1];
                    visiteds.add(getKey(curr))

                    const nextSteps = getNextStep(
                        curr[0],
                        curr[1],
                        word[index],
                        visiteds
                    );

                    if(nextSteps.length) {
                        index++;
                    }else{
                        const last = stack.pop()
                        if(visiteds.has(getKey(last))) index--;
                        visiteds.delete(getKey(last))
                    }
                    if(visiteds.size === word.length - 1) return true

                    console.log("visiteds", JSON.stringify([...visiteds]), visiteds.size, JSON.stringify(stack), index)
                    stack.push(...nextSteps);
                }
            }
        }
    }
    return false;
};

// console.log(
//     exist(
//         [
//             ["A", "B", "C", "E"],
//             ["S", "F", "C", "S"],
//             ["A", "D", "E", "E"],
//         ],
//         "ABCCED"
//     )
// );
// console.log(
//     exist(
//         [
//             ["A", "B", "C", "E"],
//             ["S", "F", "C", "S"],
//             ["A", "D", "E", "E"],
//         ],
//         "SEE"
//     )
// );
// console.log(
//     exist(
//         [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
//         "ABCB"
//     )
// );
// console.log(exist([["a", "a"]], "AAA"));
// console.log(exist([["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]], "aaaaaaaaaaaaa"));

// console.log(
//     exist(
//         [
//             ["C", "A", "A"],
//             ["A", "A", "A"],
//             ["B", "C", "D"],
//         ],
//         "AAB"
//     )
// );


// console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCEFSADEESE"));
// console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCEFSADEESE"));
console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS"));
console.log(exist([["a","b"],["c","d"]], "abcd"));
