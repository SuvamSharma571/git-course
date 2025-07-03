
let a = 300
var c = 3000// this scape outside block is known as global scope and is available for block scope
if (true)
{
 let a = 10
const b = 1
console.log(a) // this is known as block scope
}
console.log(a)

//console.log(a)
//console.log(b)
//console.log(c)


function one(){
    const username = "suvame"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website)
    two()
}
//one()

if (true)
{
    const u1 = "hitesh"
    if (u1 === "hitesh")
    {
        const website = "youtube"
        console.log(u1+website)
    }
    // console.log(website);

    
}
// console.log(u1);

//+++++++++++++++++++++++ interesting ++++++++++++
console.log(add(5))
function add(num)
{
    return num+1
}

addtwo(5)
const addtwo = function (num){
    return num+2
}

