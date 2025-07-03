const useremail = "h@mai.com"

if (useremail){
    console.log("Got user email");
}else{
    console.log("Not got email");
    
}
// falsy - false, 0,-0,bigint 0n,"",null, undefined,NaN
//truthy - true,"0",'false'," ",[],{},fucntion(){}
const arr = []
if (arr.length === 0 ){

}

const emp = {

}
if (Object.keys(emp).length === 0){
    console.log("Object is empty");
}
//Nullish calescing operator: null undefined
let val1;

//  val1= 5?? 10
// val1 = null ??10
val1 = undefined ?? 15 ?? 20
console.log(val1);


// ternary operator

// condition ? true :false

const icepe = 100
icepe>=90? console.log("Greater than budgettt") : console.log("less than budget");

