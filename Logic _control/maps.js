// const code = ["js","cpp","java"]

// const values= code.forEach( (items) => {
//     console.log(items);
//     return items
// })
// console.log(values)

const numm = [1,2,3,4,5,6,7,8,9,10]
// // const newnum = numm.filter( (num)=> {
// //     return num>6
// // } )
// // console.log(newnum);
// // const newnum = numm.map( (num)=> num+10 )

// const newnum = numm.map((num)=> num*10)
//                     .map((num)=> num+1)
//                     .filter((num)=> num>=40)
// console.log(newnum)

// const total = numm.reduce(function(acc, curval){
//     return acc+curval;
// },0)
const total = numm.reduce((acc,curval )=> acc+curval, 0)
console.log(total);
