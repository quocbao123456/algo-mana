// https://leetcode.com/problems/minimum-additions-to-make-valid-string/    (49.9%)

/**
 * @param {string} word
 * @return {number}
 */
const chooses = {
    a: "b",
    b: "c",
    c: "a",
};

var addMinimum = function (word) {
    let count = 0;
    const result = [];
    const stackWord = word.split("");

    while (stackWord.length) {
        if (!result.length) {
            result.push(stackWord.shift());
            continue;
        }

        const top = result[result.length - 1];
        const nextChar = chooses[top];

        if (stackWord[0] === nextChar) {
            result.push(nextChar);
            stackWord.shift();
        } else {
            result.push(nextChar);
            count++;
        }
    }

    if (result[result.length - 1] === "b") count++;
    if (result[result.length - 1] === "a") count += 2;
    if (result[0] === "b") count++;
    if (result[0] === "c") count += 2;

    return count;
};

// addMinimum("aac");
// addMinimum("aaa");
addMinimum("b");
