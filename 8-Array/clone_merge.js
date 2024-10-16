// To copy an array, we have three methods:

// 1. Create a new array with all the values of the array you want to copy.
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];    // We don't use this way to copy an array
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];    // This creates a separate array, so they're not equal
console.log(array1 === array2);           // This will give 'false' because array1 and array2 are different arrays

// 2. Using slice (to copy and add new items)
let array3 = array1.slice(0).concat([22, 37]);   // Corrected: concat takes an array, so use brackets
console.log(array3);                           // Output: [1, 2, 3, 4, 5, 6, 7, 8, 6, 7]

// 3. Using concat (another way to copy and add new items)
let array4 = [].concat(array1, [21, 22, 23]);     // Corrected: concat should be used on an empty array or another array
console.log(array4);                           // Output: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3]

// 4. Using spread operator (mostly used)
let array6 = [...array1, 21, 22, 23, 24];          // Spread the existing array and add new items
console.log(array6);   


//*************************************Merging of two array*****************************************************//


let name = ['abhay', 'aman'];
let lastname = ['rai', 'kumar'];
let fullname = [...name, ...lastname];  // Spread both arrays into one array
console.log(fullname);  // Output: ['abhay', 'aman', 'rai', 'kumar']