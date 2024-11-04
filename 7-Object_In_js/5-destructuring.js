// Object destructuring in JavaScript is a syntax that allows you to extract specific properties from an object and assign them to variables. This syntax makes it easier to work with objects and access or assign variables from them in a clean, readable way.
const test={
    name:"abhay",
    age:22,
    status:"singal",
    id:"yes"
}

let {name,age}=test //by default the key becomes the individual variable in object destructuring
console.log(name)
console.log(age)

// But we can also give the new variable name 
let {name:val1,age:val2,...rest}=test        
console.log(val1)
console.log(val2)
console.log(rest)       //by using sprad operator we can store rest of the property in rest object