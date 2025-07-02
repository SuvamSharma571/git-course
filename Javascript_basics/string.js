const name = "suvam"
const age = 33
console.log(name + age);

console.log(`Hello my name is ${name} and my age is ${age}`);

const getname = new String('Suvaamm');
console.log(getname.toUpperCase());
console.log(getname.charAt(2));
console.log(getname.indexOf('t'));
console.log(getname.substring(0,3));

const anotherstring = getname.slice(-7,4);

const newStringone = "    hitessh   ";
console.log (newStringone);
console.log(newStringone.trim());

const url = "http://hitesh.com/hitesh%20choudary";

console.log(url.replace('%20','-'));
console.log(url.split('/'));