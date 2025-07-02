let mydate = new Date()
console.log(mydate);

console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());

console.log(typeof mydate);

let mycreateddate = new Date(2023,0,23);
console.log(mycreateddate.toDateString());

let mycreateddate1 = new Date("2023-01-23");

let mytimestamp = Date.now();

console.log(mytimestamp);
console.log(Math.round(Date.now()/1000));

let newdate= new Date();

console.log(newdate.getDay());

