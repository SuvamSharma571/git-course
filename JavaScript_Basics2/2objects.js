const tinder = new Object()
console.log(tinder)

tinder.id = "123abc"
tinder.username = "sammy"
tinder.isloggedin = "false"
console.log(tinder)

const regu = {
    email: "user@gmail.com",
    fullname:{
        userfullname:{
            fname :"Suvam",
            lastname: "sharma"
        }
    }
}
console.log(regu.fullname.userfullname.fname);

const obj1 = {
    1:"a",2:"b"
}
const obj3 ={regu,obj1}
console.log(obj3);
const obj2 = Object.assign({}, obj1,tinder)
console.log(obj2);

 const o4 = {...obj1,...tinder}
 console.log(o4);

 const user = [
    {
        id:1,
        email:"hi@gmail.com"
    },
    {
        id:1,
        email:"hi@gmail.com"
    },
    {
        id:1,
        email:"hi@gmail.com"
    }
 ]
 console.log(user[1].id)
 console.log(tinder)
 console.log(Object.keys(tinder));

 console.log(tinder.hasOwnProperty('age'))


 const course = {
    cname : "hindi",
    price: "234",
    instructor:"Suvam"
 }

 console.log(course.cname)
const{cname: c} = course
//console.log(cname)
console.log(c)

// {
//     "name": "hitest",
//     "coursename" : "hindi"
// }


 

 