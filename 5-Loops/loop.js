//**************************************************Nested if else***********************************************************

// const readline = require('readline');

// // Create an interface for reading input from the user
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let num1 = 19;

// // Ask for user input
// rl.question('Please enter a number: ', (num) => {
//     // Convert the input (string) to a number
//     num = Number(num);

//     if (num1 === num) {
//         console.log("Your guess is right");
//     } else if (num1 < num) {
//         console.log("Your guess is too high");
//     } else if (num1 > num) {
//         console.log("Your guess is too low");
//     }

//     // Close the readline interface
//     rl.close();
// });



//**************************************************if else if lader*************************************************************

// let temp = 2;
// if(temp<10){
//     console.log("cold");
// }else if(temp<20){
//     console.log("meaadium cold");
// }else if(temp<30){
//     console.log("no cold");
// }else if(temp<40){
//     console.log("summer")
// }
// console.log("Hello")


//*******************************************Switch and Break statment***************************************************************

// let day = 5;
// switch(day){
//     case 0:
//         console.log("monday");
//     break;     
//     case 1:
//         console.log("tuesday")
//     break;
//     case 2:
//         console.log("wednesday")
//     break;
//     case 3:
//         console.log("thursday")
//     break;
//     case 4:
//         console.log("friday")
//     break;
//     case 5:
//         console.log("saturday")
//     break;
//     case 6:
//         console.log("sunday")
// }


// *************************************************While loop*********************************************************

// let i =4
// while(i<=10){
//     console.log(i)
//     i++
// }
// console.log(`the last no was ${i}`)  // the last value of i inside loop is 11 but it not get printed because it not satidfy the condition

//while loop example - find the sum of 1+2+3+4+5+6+7+8+9+10

// let add = 1;
// let total=0;
// while(add<=1000){
//     total=total+add
//     add++
    
// }
// console.log(total)




// ************************************************for loop****************************************************************************

// let total = 0;

// for(let i=1;i<=10;i++){
//     total=total+i;
// }
// //console.log(i)       //variable declared inside for loop cannot be accessed from outside but declared by var can be accessed
// console.log(total)


//************************************************Break & Continue************************************************************************* 
//Break - The break statement "jumps out" of a loop.
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { 
//         break; 
//     }
//     console.log(i)
//   }

// Continue - The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {                     //output = 0 1 2 4 5 6 7 8 9 1 0
//         continue; 
//     }  
//     console.log(i)
//   }



// ***************************************************************Do while loop************************************************************************

let u=10;
do{
    console.log(u)               //in do while loop the programm get executed once and then check the statment
    u++                          //output will be 10,it will not give an error
}while(u<=9)

console.log(u)                   //after execution it get 11 and then check with while consdition 

