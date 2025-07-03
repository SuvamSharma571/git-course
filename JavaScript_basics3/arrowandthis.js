const user = {
    uname : "hitesh",
    price: 999,
    welcome : function(){
        console.log(`${this.uname} , welcome to website`);   
        console.log(this)

    }
}

// user.welcome()
// user.uname = "suvam"
// user.welcome()

// console.log(this)

function chai(){
    console.log(this)
    let username = "suvam"
    console.log(this.username);
    
}
// chai()
// const chai1 = () =>{
//     console.log("chai garam hn ")
// }
// chai1()

// const add3 = ()=>{
//     return 3+4
// }
// console.log(add3());

// const add3 = ()=> 3+4
// const add3 = ()=> (3+4)
const add3 = ()=> ({username:"hitesh"})
console.log(add3());


const myarr = [2,3,4,43,3]
//myarr.forEach(()=>)
