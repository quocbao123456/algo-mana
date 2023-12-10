const SHIP = "#";
const EMPTY = ".";

function battleShip(input) {
    // Helper
    function buildBoard(arr) {
        return arr.map((row) => row.split(""));
    }
    function buildWeightMatrix(board) {
        return Array.from({ length: board.length }, () =>
            Array(board[0].length).fill(0)
        );
    }

    function expandAtPlace(x, y) {
        if (board[x][y] === EMPTY) return;

        if (!weigths[x][y]) weigths[x][y] = 1;

        // Expand
        const top = +(x > 0 && board[x - 1][y] === "#" && !weigths[x - 1][y]);
        const left = +(y > 0 && board[x][y - 1] === "#" && !weigths[x][y - 1]);
        const right = +(
            y < width - 1 &&
            board[x][y + 1] === "#" &&
            !weigths[x][y + 1]
        );
        const bottom = +(
            x < height - 1 &&
            board[x + 1][y] === "#" &&
            !weigths[x + 1][y]
        );

        const roundWeight = top + left + right + bottom;
        weigths[x][y] += roundWeight;
        if (top) {
            weigths[x - 1][y] = weigths[x][y];
        }
        if (left) {
            weigths[x][y - 1] = weigths[x][y];
        }
        if (right) {
            weigths[x][y + 1] = weigths[x][y];
            expandAtPlace(x, y + 1);
        }
        if (bottom) {
            weigths[x + 1][y] = weigths[x][y];
            expandAtPlace(x + 1, y);
        }

        // Can't expand more
        if (!top && !left && !right && !bottom) {
            console.log("x", x, y, top, left, right, bottom);
            result[weigths[x][y] - 1]++;
        }
    }

    // Presoccess
    const board = buildBoard(input);
    const weigths = buildWeightMatrix(board);

    const height = board.length;
    const width = board[0].length;

    const result = [0, 0, 0]; // Partol, Submarine, Destroyer

    // Implementation
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            expandAtPlace(i, j);
        }
    }
    // expandAtPlace(0,0);
    // expandAtPlace(0,1);

    // expandAtPlace(1,2);

    console.log(JSON.stringify(weigths), result);
}

// battleShip([
//     ".##.#",
//     "#.#..",
//     "#...#",
//     "#.##."
// ])

battleShip([
    "##.", 
    "#.#", 
    ".##"]);

// battleShip([
//     ".....",
//     ".....",
//     ".....",
// ])
