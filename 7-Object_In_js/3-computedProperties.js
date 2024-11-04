// Computed properties in JavaScript let you create object properties automatically based on other values. They update themselves, so you don’t have to set them manually. This makes it easier to handle dynamic data

let key1="name"
let key2="age"

let val1="abhay"
let val2=22

const obj={
    [key1]:val1,
    [key2]:val2
}
console.log(obj)

//Other way to compute
let obj1={}
obj1[key1]=val1
obj1[key2]=val2
console.log(obj1)