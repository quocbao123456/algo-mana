const word = "catsandog";
// const dict = ["cat", "cats", "and", "sand", "dog"];
const dict = ["cats", "dog", "sand", "and", "cat"];

function parse(s, wordDict) {
    const term = new Set(wordDict);

    const memoizeds = new Map();
    function dp(index, temp) {
        if (memoizeds.has(`${index}-${temp}`))
            return memoizeds.get(`${index}-${temp}`);

        if (index > s.length - 1) {
            return term.has(temp);
        }

        const noChoose = dp(index + 1, temp + s[index]);
        const choose = term.has(temp + s[index]) ? dp(index + 1, "") : false;

        const result = noChoose || choose;

        memoizeds.set(`${index}-${temp}`, result);

        return result;
    }

    return dp(0, "");
}

console.log(parse(word, dict));
console.log(parse("applepenapple", ["apple","pen"]));
