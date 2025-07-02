const heros = ['shaktiman','naagraj','dholu']
const marvel = ['thor','ironman','bukky']
const dc = ['flash','batman']
marvel.push(dc)
console.log(marvel)
console.log(marvel[3][1])
const new1 = marvel.concat(heros)
console.log(new1);

const n1 = [...heros,...dc]
console.log(n1);


const ano = [1,2,3[4,5,6],7,[8,9,5,[23,32]]]
const nano = ano.flat(Infinity)
console.log(nano);

console.log(Array.isArray("Histenad"))
console.log(Array.from("Histenad"))
console.log(Array.from({name:"Suvam"}));//intresting as empty arraay




