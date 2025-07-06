//fetch('http://something.com').then().catch().finally()
const promise1 = new Promise((resolve,reject) => {
    // do an async task
    //db task, crypto, network call
    setTimeout(() =>{
        console.log("Ssync taskins caomplete")
        resolve()
    },2000)
})

promise1.then(function (){
    console.log("promis consumend")
})

new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then (function(){
    console.log("Async task 2 then part resolved")
})

const promise3 = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve ({username : "Chai2" , email : "chai@gmail.com"})
    },1000)
})

promise3.then(function (user){
    console.log(user)
})

const promise4 = new Promise(function (resolve,reject){
     setTimeout(function(){
        let error  = true
        if (!error){
            resolve ({username : "Chai2" , pass : "chai@gm"})
        }
        else {
            reject ('Error:Something went wrong')
        }
    },2000)

}
)
promise4.then(function (user){
    console.log(user)
    return user.username
}).then( (username ) => {
    console.log(username)
}).catch( function (error) {
    console.log (error)
}).finally(() => console.log ("The promise is either resolver or rejected"))

const promise5 = new Promise (function (resolve,reject) {
    setTimeout(function(){
        let error  = true
        if (!error){
            resolve ({username : "javascrepit" , pass : "dsf@gm"})
        }
        else {
            reject ('Error:Something went wrong in p5 bimrooooo')
        }
    },2000)

});

async function  consumee(){
    try {
        const response = await promise5
    console.log (response)
    }
    catch(error){
        console.log(error);
        
    }
}

consumee()



// async function getallusers(){
//   try {
//       const responss = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await responss.json()
//     console.log(data)
//   } catch (error) {
//     console.log (error)
    
//   }
// }
// getallusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then ((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) =>{
    console.log(error)
})
