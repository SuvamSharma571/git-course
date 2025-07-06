const { use } = require("react");

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log (`Usernam${this.username}`);
    }
    static createId(){
        return`123`
    }
}
const hitesh = new User("Suvam")
//console.log(hitesh.createId())

class Teacher extends User{
    constructor(username,email)
    {
        super (username)
        this.email = email
    }
}
const iphone = new Teacher ("iphone","i@phone.cpm")
console.log(iphone.createId())
iphone.logMe()