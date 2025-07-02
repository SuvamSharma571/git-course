
function hello(){
    console.log("h");
}

hello()

function add2n(number1, number2){
    console.log(number1 + number2);
}

add2n(2,3)
add2n("2",3)
add2n(null,3)
add2n(undefined,3)
add2n(NaN,3)
add2n("2","3")

function add2nr(number1, number2){
    // let re = number1 + number2
    // return re
    return number1 + number2
}

add2nr(3,4)

function loo(username = "Extra name haai")
{
    //if(username === undefined)
    if (!username)
        {
            console.log("Enter krooona");
            return
    }
    return `${username} just logged in `
}
console.log(loo("suvam"));
console.log(loo());

function noa(...num){
    return num
}
console.log(noa(200,33,2,4,3,2,4,3,34,435,43,2))

const user = {
    name : "Subama",
    age :21
}
function handlingobjects(user){
    console.log(`username is${user.name}`);
    

}
handlingobjects(user)

const myarr = [1,2,3,4,5,6,7,8,9,0]

function ar(ar){
    return ar[3]
}
console.log(ar(myarr));
