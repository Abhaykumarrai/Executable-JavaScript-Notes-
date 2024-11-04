// loops are used to itarate a value in Object 
// we use two types of loop in js (1)- for in loop (2)-Object Key

const Obj1={
    name:"abhay",
    age:22,
    email:"abhaykumarrai666@gmail.com"
}
for(let key in Obj1 ){
    console.log(key) //this will print all the key present in the object
    console.log(Obj1[key]) //this will print all the value of key
    console.log(`${key}:${Obj1[key]}`) //this will give the key-value pair
}


console.log(Object.keys(Obj1))  //this will give an array which contain all the key of the object
console.log(typeof Object.keys(Obj1)) //the datatype of an array is object
let val=Array.isArray(Object.keys(Obj1))
console.log(val)