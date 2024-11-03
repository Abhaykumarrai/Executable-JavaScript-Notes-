//Arrays are ordered collection of items
//Array are non primitive data type also called reference type
//Array are mutabale,we can change the value of an array


//How to create an array
let fruits = ["mango","banana","apple"]               //stored in form of index starting from 0
console.log(fruits)

// we can create array by const ---> this method of creating array is mostly recomended because in this way we can privent from array redeclaration

//To access the perticular value of an array
console.log(fruits[2]);

//In one array we can store any datatype
let anyArray = [1,3,4,5.664,"Abhay",null,undefined];
console.log(anyArray)

//How to change value in array
console.log(fruits)
fruits[0]="lichi";
console.log(fruits)

//To check the datatype of an array
console.log(typeof fruits)                //in js all refrence tyoe datatype by default considered as object , so array is also an object 
console.log(Array.isArray(fruits))        //isArray is the method which is used to check the data type of an array