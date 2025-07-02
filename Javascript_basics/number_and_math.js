const numbee = 400;
console.log(numbee);

const balance = new Number(100);
console.log(balance);

console.log(balance.toFixed(2));

const a2 = 23.9696;
console.log(a2.toPrecision(3));

const hun = 1000000
console.log(hun.toLocaleString('en-IN'));

//***********************Maths**************
console.log(Math.abs(-2));
console.log(Math.round(4.3));
console.log(Math.ceil(-2.3223));
console.log(Math.floor(-2.3443));

console.log(Math.random());
console.log((Math.random()*10 )+1);

const min = 10
const max = 20


console.log(Math.floor((Math.random() * (max-min +1))) +min);
