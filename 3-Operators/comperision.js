// Comparison Operators

// Operator	Description
// ==	        equal to (loose equality)
// console.log(2==1)
// ===	        equal value and equal type also called strict check
console.log(2===1)
// !=	        not equal
console.log(2!=1)
// !==	        not equal value or not equal type
console.log(2!==1)
// >	        greater than
console.log(2>1)
// <	        less than
console.log(2<1)
// >=	        greater than or equal to
console.log(2>=1)
// <=	        less than or equal to
console.log(2<=5)



// Comperision between diffrent datatype
// In javascript there is one varnability or we can say bug that when we want to perfome a operation on diffrent type of data type the javascript 
// implicitly(autometicaly) perfprme type coercion,meaning it tries to convert both sides to a common type.
console.log(null>0)  // > operator first convert null into 0 , then compare with 0 ,0>0 which is false
console.log(null==0) //
console.log(null>=0) // > operator first convert null into 0, then compare 0>=0 which is true


// Some other confusing example 
console.log(null==undefined)
console.log(null===undefined)
// in below 3 case we get false value because javascript convert the undefined datatype in number and when we convert undefined data type in number we get NaN which is not a number 
console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)




//When a number and a string are combined, JavaScript converts the number to a string and concatenates them.
//Arithmetic is only performed when both operands are numbers; otherwise, concatenation occurs.
console.log(5+5+"6")
console.log("1"+4)
console.log(4+'5')


