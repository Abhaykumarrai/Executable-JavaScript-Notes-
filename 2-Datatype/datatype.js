"use strict" // this tells that now all js version will be treated as newer version
 
// alert (4+1);  => this will not execute because we are using node.js not browser and alert is a browser feature

// Datatypes in Js
/* 
    1-String
    2-Number
    3-Bigint
    4-Boolean
    5-Undefined
    6-Null
    7-Symbol - for unique values 
    8-Object
*/

//String => A string (or a text string) is a series of characters like "John Doe".
// It should be within inverted comma "".
// We can use single and double quats it does't metter 

let user = "Abhay";
let add = 'unit-E'
console.log(user)
console.log(add)
console.table([user,add])




// 2-Number => All JavaScript numbers are stored as decimal numbers (floating point)
//Javascript numbers are always one type: double (64-bit floating point).
let x=234 //without decimal point 
let y=567.00 //with decimal point
console.table([x,y])

/*Most of other programming languages have many number types:

Whole numbers (integers):
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):
float (32-bit), double (64-bit).
*/

// BigInt
let h= BigInt('59879579837597394573984759759739579759759795')
console.log(h)




// 4-Boolean => Gives true and false
// Examples are it is used to check whether the user is loged in or not , for server request and many more 

let Boolean = true
console.log(Boolean)




// 5-Undefined => when we create an storage or variable but we don't assign a value to it the datatype is created is clled udefined datatype.
let customerID = 4444
// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
customerID = undefined
console.log(customerID)



// 6-Null => this data type is intentially define that this data type or storage or variable is empty and null

let shopID = null
console.log(shopID);




