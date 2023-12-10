function challenge1(str){
    if(str.length <= 1) return "";
    function remove(str, index){
        return str.slice(0, index) + str.slice(index + 1);
    }

    for (let index = 0; index < str.length - 1; index++) {
        if(str.charAt(index) > str.charAt(index + 1)) return remove(str, index);
    }

    return remove(str, str.length - 1)

}


