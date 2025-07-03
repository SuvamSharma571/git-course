// //forof loop
// const arr = [1,2,3,4,5]

// for (const a of arr) {
//     console.log(a)
// }

//maps
// const map = new Map()
// map.set ('In',"India")
// map.set ('Fr',"france")
// map.set ('usa',"americo")

// // console.log(map);

// for (const [key,value] of map) {
//         console.log(key, " ; ", value);
            
// }


// for (const [key,value] of myob) {
//         console.log(key, " ; ", value);
            
// } error

// // *********************************************
// const myob = {
//     js : "javascript",
//     cpp:"c++",
//     rb:"ubyr"
// }
// for (const key in myob) {
//    console.log(myob[key]);
   
//     }

// const prog = ["js", "rb","java"]
// for (const key in prog){
//     console.log(key);
// }

const are = ["a","b","c","d"]

// are.forEach( function(item) {
//     console.log(item);
    
// }  )

// are.forEach( (value) => {
//     console.log(value);
// })
// function b (item){
//     console.log(item);
// }
// are.forEach(b)

// are.forEach( (value , index, arr) => {
//     console.log(value , index, arr);
// })

const new1 = [{
    language : "js",
    languagefile  : "javascript"
}
,
{
    language : "js1",
    languagefile  : "javascript1"
},
{
    language : "js2",
    languagefile  : "javascript2"
}
]
new1.forEach ((Item) => {
    console.log(Item.languagefile)
})
