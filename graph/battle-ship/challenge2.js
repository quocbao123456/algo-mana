function challenge1(str){
    if(str.length <= 1) return "";
    function remove(str, index){
        return str.slice(0, index) + str.slice(index + 1);
    }

    for (let index = 0; index < str.length; index++) {
        if(str.charAt(index) > str.charAt(index + 1) || index === str.length - 1) return remove(str, index);
    }
}

console.log(challenge1("acb"))
console.log(challenge1("hot"))
console.log(challenge1("codility"))
console.log(challenge1("aaaa"))








function challenge2(P, S){
    const totalSeat = S.reduce((acc, curr) => acc + curr);
    const totalPerson = P.reduce((acc, curr) => acc + curr);

    let redudant = totalSeat - totalPerson;
    if(redudant < 0) return -1;

    const sortedS = S.sort((a, b) => a - b);
    let reduceS = 0;

    for (let index = 0; index < sortedS.length; index++) {
        redudant -= sortedS[index];
        if(redudant < 0) return S.length - reduceS
        reduceS++;
    }

    return S.length - reduceS
}

console.log(challenge2([1,4,1], [1,5,1]))
console.log(challenge2([4,4,2,4], [5,5,2,5]))
console.log(challenge2([2,3,4,2], [2, 5, 7, 2]))



