function Setusername(username){
    //complex DB calls
    console.log("is called")
    this.username = username
}

function createUser(username,email,password){
    Setusername.call(this ,username)

    this.email = email
    this.password = password
}

const  chai = new createUser("chai","chai@google.com",12341)

console.log(chai)
// call passes the current execution context
