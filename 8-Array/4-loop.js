// For loop in javascript
// itaratre - is the other name of loop
let test=["abhay","aman","anurag","anmol"]


for(let i=0;i<test.length;i++){
    console.log(test[i])
}

// we can also apply methods inside the for loop
for(let i=0;i<test.length;i++){
    console.log(test[i].toUpperCase())
}

//we can transfer the values after applying for loop in other array
let test2=[]
for(let i=0;i<test.length;i++){
    test2.push(test[i].toUpperCase())
}
console.log(test2)



//While loop In Array
const test3=["anil","anmol","aniket","anisha"]
let i=0
while(i<test3.length){
    console.log(test3[i])
    i++
}


//The JavaScript for of statement loops through the values of an iterable object. 
//The JavaScript for of statement loops through the values of an iterable object.
const test4=["abhay","aman","anil","anmol"]
for(test of test4){
    console.log(test)
}


//For in loop in Array
const test5=["abhay","anurag","aman","anmol"]
for(index in test5){
    console.log(test5[index])
}

