class User {
    constructor(username,pass) {
        this.username =username
        this.pass=pass
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(value)
    {
        this._username = value
    }
    get pass(){
        return this._pass.toUpperCase()
    }

    set pass(value){
        this._pass = value
    }
}
    const hitesh = new User("hitesh","hj")
    console.log(hitesh.pass)
    console.log(hitesh.username)


