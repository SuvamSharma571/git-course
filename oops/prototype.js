let myname  = "Suvam   "
// console.log(myname.length);


let myarr= [ "thor","spidey"]

let heropower = {
    thor : "hammer",
    spidey: "sling",

    getspidey : function(){
        console.log(`spidey power is ${this.spidey}`)
    }
}

Object.prototype.hitesh = function(){
    console.log("suvam has the best power");
    
}

Array.prototype.heysuvam = function(){
    console.log("suvam says hello");
    
}
heropower.hitesh()
myarr.hitesh()
//heropower.heysuvam()//no power to object

// inheritence
const teacher = {
        makevideo: true
}
const teachingsupport  = {
    isavalible : false
}

const Tasupport = {
    makesupport :'jsassignment',
    fulltime : true
    // __proto__: teachingsupport
}

Object.setPrototypeOf(teachingsupport,teacher)

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
    
}
myname.truelength()
