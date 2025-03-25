class Trie {
    values;
    constructor(){
        this.values = Array.from({length: 10}, (_, index) => ({value: index, checked: false, next: null}));
    }

    addValue(num){
        const chars = String(num).split('');
        let currentLevel = this.values;
        
        for (let index = 0; index < chars.length; index++) {
            const currDigit = Number(chars[index]);

            currentLevel[currDigit].checked = true;

            if(currentLevel[currDigit].next === null){
                currentLevel[currDigit].next = Array.from({length: 10}, (_, index) => ({value: index, checked: false, next: null}));
            }

            currentLevel = currentLevel[currDigit].next
        }
    }

    checkPrefix(k){
        const chars = String(k).split('');
        let currentLevel = this.values;

        let level = 0;

        for (let index = 0; index < chars.length; index++) {
            const currDigit = Number(chars[index]);

            if(!currentLevel[currDigit].checked){
                return level
            }

            level++;
            currentLevel = currentLevel[currDigit].next;
        }

        return level
    }
    
}

function longestCommonPrefix(arr1, arr2) {
    const trie1 = new Trie(); 
    function buildTrie(arr){
        arr.forEach(num => {
            trie1.addValue(num);
        });
    }


    buildTrie(arr1);

    return Math.max(...arr2.map(num => trie1.checkPrefix(num)));
};

console.log(longestCommonPrefix([1,2,3], [4,4,4]))
