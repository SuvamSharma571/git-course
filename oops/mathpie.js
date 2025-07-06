const descriptoe = Object.getOwnPropertyDescriptor(Math , "PI")
console.log (descriptoe)

const chai = {
    name :"gingere",
    price :250,
    isAvailabe:true,
    orderchai : function(){
        console.log("code fat gya rey baba");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai , "name" , {
    writable:false,
    enumerable :false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    {
    console.log(`${key} : ${value}`)
    }
}