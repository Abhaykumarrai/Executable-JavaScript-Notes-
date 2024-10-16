//To add new itme at the end we use push() method
let fruits = ["mango","banana","apple"]              
console.log(fruits)
fruits.push("lichi")          //this will add lichi in array fruits at the end of the array, this is faster than unshift
console.log(fruits)


//To add new item at the start of an array
let fruits1 = ["mango","banana","apple"]             //this is slower than unshift because it first shift all values and then add new one
fruits1.unshift("gvawa")
console.log(fruits1)


//To delete item form the end we use pop() method 
let fruits3 = ["mango","banana","apple"]                 
let deletedFruit= fruits3.pop()                   // the pop method is used to extract the item from the array and keep it to assign it in variable and object
console.log(deletedFruit)
console.log(fruits3)


//To delete item from start we use shif method 
let fruits4 = ["mango","banana","apple"]  
let startDelete = fruits4.shift();
console.log(startDelete);
console.log(fruits4)