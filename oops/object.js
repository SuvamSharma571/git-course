function multi(num){

    return num*5
}

multi.power = 2
console.log(multi(5))
console.log(multi.power);
console.log(multi.prototype)

function createuser(username,score){
    this.username = username
    this.score= score
}

createuser.prototype.increment = function(){
    this.score++
}
createuser.prototype.printme = function(){
    console.log (`${this.score}`)
}

const chai = new createuser("chai",25)
const tea  = new createuser("tea", 250)

chai.printme()

//new keyword initiate the creation of new JSobject
// a prototype  is linked. the newly created objet linked to the prototype property of the constructor fucntion
// this means that it has access to properties and method defined on the constructoe's prototype

// The constructor is called : the constructor function is called with the specifiedarguments and this is bound to 
//the newly created object. if no explicit, return value is specified from the constructor , Javascript assumes this, the newly created object to be the intended return value

// the new object is returned 