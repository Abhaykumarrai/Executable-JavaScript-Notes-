// Strings are for storing text
// Strings are written with double and with single quotes no restrictons
// console.log("Abhay")
// console.log('Anurag')

// Wrong way to string concatenation or we can say Without string interpolation

let user1="aman"
let user2="anmol"
console.log("my brothers are "+user1+" "+user2)

// wright way to string concatenation or we can say With string interpolation (using template literals)
// template literals - use back-ticks (``) rather than the quotes ("") to define a string

let com1="abhinav"
let com2="Anil"
let output=
console.log(`my customers are ${com1} and ${com2}`);


// Template Strings allow expressions in strings
let price= 200 
let gst=100
console.log(`your final price is = ${(price-gst)*1/10}`);


