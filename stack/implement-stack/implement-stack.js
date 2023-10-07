function Stack(){
    this.size = 0;
    this.val = {};
}

Stack.prototype.push = function(val){
    this.val[this.size] = val
}


Stack.prototype.pop = function(){
    const top = this.val[this.size];
    delete this.val[this.size];
    return top
}

Stack.prototype.values = function(val){
    const currVal = this.val;

    return Object.values(currVal)
}

const stack = new Stack();

stack.push(1);
// const top = stack.pop();

console.log("stack", stack)
// console.log("top", top)
console.log("values", stack.values())