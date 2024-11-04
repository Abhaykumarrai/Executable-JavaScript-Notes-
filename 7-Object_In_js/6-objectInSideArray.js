// Object Inside Array
// we can create multiple objects inside an array
const arrays=[
    {name:"abhay",age:22,mobail:54534},
    {name:"aman",age:22,mobail:54534},
    {name:"anmol",age:15,mobail:54534},
    {name:"anurag",age:18,mobail:54534}
]
console.log(arrays[0])     //here we have created an array and inside an array we have created 4 objects and we can access each object by there index no


// we can performe all the loops in this for example

for(array of arrays){
    console.log(array.name)
}
