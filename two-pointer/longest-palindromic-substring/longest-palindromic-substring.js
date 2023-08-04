//  https://leetcode.com/problems/longest-palindromic-substring/    (32.6%)

export default longestPalindrome = function (s) {
    if(!s.length) return "";
    if(s.length === 1) return s[0];
  
    const arrIndexs = Array.from({length: (s.length - 2)*2 + 1}, (_, i) => i);
    let result = s[0];

    function getRoundIndex(index){
        const left = Math.floor(index/2);
        const right = index%2 === 0 ? left + 1 : left + 2;

        return [left, right];
    }

    function expandPalind(index){
        let [left, right] = getRoundIndex(index);
        if(s[left] !== s[right]) return "";
        
        while(left > 0 && right < s.length - 1 && s[left - 1] === s[right + 1]){
            left--;
            right++;
        }
        return s.slice(left, right + 1)
    }

    for (const index of arrIndexs) {
        const expand = expandPalind(index);
        if(expand.length > result.length) result = expand;
    }

    return result
};

// 1 <= s.length <= 1000
// Complexity: N^2 (worst case)
// Mem: N

// Refer: Using dp to solve this problem