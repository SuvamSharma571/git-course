const myarr = [0,1,2,3,4,5,6,"true",true]
console.log(myarr[0])
const myarr2 = new Array(1,2,3,4,5,6)

console.log(myarr2.length);

myarr2.push(11);


console.log(myarr2);
console.log(myarr2.length);

myarr2.pop();

myarr.unshift(10);

console.log(myarr2);
console.log(myarr2.length);

myarr2.shift();
console.log(myarr2.includes(9));

const newarr = myarr.join();

console.log(newarr);
console.log(typeof newarr);

//slice - doesnot include last index (original doesnot changes), splice  - includes last index(original array get changes and the part of splice get removed)
console.log("A ",myarr)

console.log()

    




