// there are two ways by which we can add two or more object in singal object 
// (1)-Object Assign Method (2)-By spread Operator 

let obj1={
    name:"abhay"
}
let obj2={
    age:22
}
let obj3={
    email:"abhaykumarrai666@gmail.com"
}
// 1-with the help of Object.assign method 
// syntax- Object.assign(target,source) ----> According to mdn documentation
let newObj=Object.assign({},obj1,obj2,obj3)
console.log(newObj)


// 2-with the help of spread operator ---> spread operator first spread all the key-value pair and then combain it in a single object 
let newObj2={...obj1,...obj2,...obj3}
console.log(newObj2)


// some importan note
// 1- As we know string are ittrable 
let array=[...'abxdfs'] //here spread operator spread all the character [ 'a', 'b', 'x', 'd', 'f', 's' ] like this 
console.log(array)


// 2-sppose you have two object and the both the object have key named let say key1 and if you try to mearge the object than which key will be in new object ,because in object we dont have two same key , so in this condision the last key overide the first one 
let test1={
    name:"abhay",
    age:22
}
let test2={
    name:"anurag" 
}
let test3={...test1,...test2}
console.log(test3)      //{ name: 'anurag', age: 22 } so the last key overide the first one 



//itrables
let test4={..."sdfsdfsf"}
console.log(test4) //in this way index become the key and the chaaracter become the value