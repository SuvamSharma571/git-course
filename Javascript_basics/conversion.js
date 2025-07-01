let age = "33"
console.log(typeof(age))
let newage = Number(age)
console.log(typeof(newage))
// NaN is a type when we try to convert a not possible conversion . Such as When trying to convert a string to integer or undefined to integer but there is character present in the string
let a = null
let na = Number(a)
console.log(typeof(na))
console.log (na)
// When trying to convert a null value to integer it gives a value of 0

