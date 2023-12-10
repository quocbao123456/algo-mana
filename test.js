function Person(){

    this.name = "A";

    return {
        get: function(){
            console.log(this, this.name)
        },
        set: function(target){
            this.name = target
        }
    } 
}


const a = new Person();


a.get();

a.set("b");

a.get()