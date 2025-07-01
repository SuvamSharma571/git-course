//primitive and non primitive -- this conversion is done keeping in mind how data is saved and how it is being accessed
//primitive(call by value) - 7 types - string, Number , Boolean , Null , Undefiiined , symbol , bigint 

// Non primitive or reference type ( call by reference)  - arrays, objects, functions  ---- return object or function object

// Java Script is a dynamically typed language
const age = 2
const score = 2.3
const name = "Suvam"
let name1;
const id = Symbol('123')
const aid = Symbol('123')
console.log(id === aid)
const bignumber = 234565432345434565434543454343234323432323432343434n


const heros = ["Shaktiman", "naagraj", "doaga"]
let myobj = { 
    age: 23,
    name1 :"Suvam",
}

const myfunct = function (){
    console.log ("Hello world");
}
console.log(myfunct())


//**************************memories ***************************************
// stack memory and heap memory
// Stack - primitive type (Copy milta haai )
//heap - Non primitive type( reference milta haai )

let myname = "Suvam"
let another = myname

another = "coding practice"
console.log(another)
console.log(myname)

let user = {
    username : "Suvam",
    upi:"Suvam@pymbl"
}

let user1 = user
console.log(user1)
user1.upi = "Suvam@sbi.paytm"

console.log(user)
