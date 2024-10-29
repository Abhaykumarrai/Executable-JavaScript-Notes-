//JavaScript variables can be converted to a new variable and another data type:




// Converting Strings to Numbers
let user = 'Aman'
console.log(typeof user)
//converting string to number
let userChange = Number(user)
 console.log(typeof userChange)
// But when we try to convert String to number it gives a datatype NaN - Not a Number
console.log(userChange)






// convert Number to string 
let userID = 34
console.log(typeof userID)
//converting number to string
let UserIDchange = String(userID)
console.log(typeof(UserIDchange))
console.log(UserIDchange)





// Converting Booleans to Numbers
let ex = false
console.log(typeof ex)
//convering boolean to number 
let exChange = Number(ex)
console.log(typeof exChange)
console.log(exChange)
/* Observations
  boolean  to  number 
   true -   1
   false -  0
*/




// Important Boolean
let num = 'abcd'
console.log(typeof num)
// converting number into boolean 
let numChange = Boolean(num)
console.log(typeof numChange)
//printing the value of changed variable 
console.log(numChange)
/* Observations
  number  to  boolean 
   1 -   true
   0 -   false
   ""-   false
   "abcd"- true
   null-false
   undefined- false
*/