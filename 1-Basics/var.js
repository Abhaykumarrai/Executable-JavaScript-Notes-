// Constant - Variables defined with const cannot be Redeclared
// There are only one way to declare constant

const amouuntID = 1234;
// amouuntID = 234;   Note - we cannot reassign constant again


// Variables - Variables are Containers for Storing Data
// Variables can be declare by two was one is by using var and other is by using let.
// Always dont prefer to use var because var have no block scope 
// Always prefer to use let 
// The main difference between var and let is that var is function-scoped, while let is block-scoped. This means that a var variable is visible to the whole function in which it is declared, while a let variable is only visible within the block in which it is declared.
var age = 13;
let profileID = 11;



age= 23;
profileID = 33;

// To print anything on browser we use
// Using semicolon is not mendetoary
console.log(amouuntID);

// To print anything in tabular formate we use
console.table([amouuntID,age,profileID])
