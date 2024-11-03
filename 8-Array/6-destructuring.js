// Destructuring is the expression in javascript which helps to unpack the values of array or properties of object and assign to an individual variable.

let test=["value1","value2","value3","value4",]
// in general if i want to assign vlues of array test to individual variable i can do as follow
let test1=test[0];     //so this is the way to assign the value of array to the new variable.
let test2=test[1];
console.log(test1)
console.log(test2)
//this will not provid any effect on normal variable

//?But with the object destructuring we will do the same thing in one line
// case -1 

let array=["value1","value2"] 
let [var1,var2]=array;         //so here value1 and value2 is assigned to variable var1 and var2 which is present in array 
console.log(var1,var2)

// case-2
// what happen if we want to directly assign the value3 in a saparate variable var3 by array destucturing, 
let array1=["value1","value2","value3"]
let [,,var3]=array1;
console.log(var3)

// case-3
// if we want to assign the value to the individual varuable and the value in not present in the array we will get the undfined variable
let array2=["value1","value2","value3"]
let [nvar1,nvar2]=array1;
console.log(var3)

//case-4
//if we want to store all the left value of an array in an individual variable 
//for that either we can use slice metheod or spread operator
let array3=["value1","value2","value3","value4","value5","value6"]
let [var11,var22,...var33]=array3   //by using spread operator
let var44=array3.slice(3)            //by using slice method
console.log(var44)