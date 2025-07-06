// ES6

// const { use } = require("react")

// class User {
//     constructor(username,email,password)
//     {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("Chai", "chai@gmail.com","123")
// console.log (chai.encryptPassword());
// console.log(chai.changeUsername())

//behind the scene 
function user (username,email,password)
    {
        this.username = username
        this.email = email
        this.password = password
    }

    user.prototype.encryptPassword = function (){
        return `${this.password}abs`
    };
 const chai = new user("abbcc","uubbhh@gmail.com","inm")
 console.log(chai.encryptPassword())