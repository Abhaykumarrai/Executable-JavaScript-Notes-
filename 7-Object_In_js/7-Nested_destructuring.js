// Nested Object Destructuring
const arrays=[
    {name:"abhay",age:22,mobail:54534},
    {name:"aman",age:22,mobail:54534},
    {name:"anmol",age:15,mobail:54534},
    {name:"anurag",age:18,mobail:54534}
]

// let [user1,user2,user3,user4]=arrays  //this is the normal destructuring we have created 4 different variable and each variable has assign a each object
// console.log(user1)


// but id we want to access the name from first object and mobail from last object we can use nested  destruscturing 
let [{name},,,{mobail}]=arrays
console.log(name)
 

//we can also assign a new variable name by using the followig syntax
// let [{name:val1},,,{mobail:val2}]=arrays
// console.log(val1)
// console.log(val2)