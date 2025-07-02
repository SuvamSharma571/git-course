// singleton ---- Object.create //created by constructor

//object literals
const mys = Symbol("keys1")
const jswuse = {
    name:"hetesh",
    age : 21,
    [mys] :"keys1",
    location: "jaipur",
    email: "suvam@google.com",
    isloggedin: false,
    last: ["mon","tues"]
}

console.log(jswuse.age);
console.log(jswuse["email"]);

jswuse.age = 23
//Object.freeze(jswuse)


jswuse.greeting = function(){
    console.log("Hello js user");   
}
console.log(jswuse.greeting())
console.log(jswuse.greeting)

jswuse.g2 = function(){
    console.log(`hello ${this.name}`)
}


console.log(jswuse.g2())
 