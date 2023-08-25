// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/ (50.4%)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (!s || !p) return "";

    let chars = new Map();
    for (const char of p.split("")) {
        chars.set(char, (chars.get(char) || 0) + 1)
    }
    const initChars = new Map(chars);

    let left = 0,
        right = 0;

    const moveLeft = () => {
        chars.set(s[left], chars.get(s[left]) + 1);
        left++;
    }
    const moveRight = () => {
        chars.set(s[right], chars.get(s[right]) - 1);
        right++;
    }
    
    const reset = () => {
        right++;
        left = right;
        chars = new Map(initChars);
    }


    const result = [];
    while(right <= s.length){
        const curr = s[right]
        if(!chars.has(curr)){
            reset()
            continue;
        }

        const freq = chars.get(curr);
        if(freq === 0){
            while(chars.get(curr) === 0){
                moveLeft();
            }
        }else{
            moveRight();
            if(right - left === p.length) result.push(left)
        }
    }
    return result;
};

findAnagrams("cbaebabacd", "abc");
findAnagrams("abab", "ab");
findAnagrams("baa", "aa");


findAnagrams("abaacbabc", "abc");
