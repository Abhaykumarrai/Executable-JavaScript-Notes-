// Constant - Variables defined with const cannot be Redeclared
// There are only one way to declare constant

const amouuntID = 1234;
// amouuntID = 234;   Note - we cannot reassign constant again


// Variables - Variables are Containers for Storing Data
// Variables can be declare by two was one is by using var and other is by using let.
// Always dont prefer to use var because var have no block scope and functional scope.
// Always prefer to use let 
var age = 13;
let profileID = 11;



age= 23;
profileID = 33;

// To print anything on browser we use
// Using semicolon is not mendetoary
console.log(amouuntID);

// To print anything in tabular formate we use
console.table([amouuntID,age,profileID])