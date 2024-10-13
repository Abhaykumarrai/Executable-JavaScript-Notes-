//all are case sensitive


// indexOf() - The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
console.log(text.indexOf("occurs"))

//lastIndeThe lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text2 = "Please locate where 'locate' occurs!";
console.log(text.lastIndexOf("occurs"))

//search() - The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let text1 = "Please locate where 'locate' occurs!";
console.log(text.search("occurs"))

//Note - it return -1 in case of no match

// String match() - The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let text5 = "The rain in SPAIN stays mainly in the plain";
console.log(text5.match("nly"))



// String matchAll()


// String includes() - The includes() method returns true if a string contains a specified value.Otherwise it returns false.
let exe = "my name is abhay"
console.log(exe.includes("abhay",11)) // check name abhay at index no 11


// String startsWith()- The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// String endsWith() - The endsWith() method returns true if a string ends with a specified value.Otherwise it returns false:
let exe1 = "my name is abhay"
console.log(exe1.startsWith("my")) //gives true
console.log(exe1.startsWith("name")) //Gives false
console.log(exe1.endsWith("abhay")) //gives true
console.log(exe1.endsWith("my")) //gives false
