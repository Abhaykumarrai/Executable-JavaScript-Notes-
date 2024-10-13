// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string
// Some of the string metheod are:-
// *********************************************************************************************************************************************************

// String length - gives the length of the string
let val="ABHAYKUMARRAI"
console.log(val.length)

// *********************************************************************************************************************************************************

// String charAt() - gives the number at the specific index
console.log(val.charAt(3))

// *********************************************************************************************************************************************************

// String charCodeAt() => The method returns a unique UTF-16 code (an integer between 0 and 65535).
console.log(val.charCodeAt(5))

// *********************************************************************************************************************************************************

// String at() -The at() method returns the character at a specified index (position) in a string.// ?It allows the use of negative indexes while charAt() do not.
console.log(val.at(0))

// *********************************************************************************************************************************************************

// String [ ] - It makes strings look like arrays (but they are not) //?If no character is found, [ ] returns undefined, while charAt() returns an empty string.
console.log(val[0])

// *********************************************************************************************************************************************************

// String slice() - the slice method in js is used to cut ot extract a section of string and return a new string without modifying the actual value
// This method is very flexible and can be used to work with both strings and arrays
// Syntax --> .slice(start, end)
// ?start: The index at which to begin extraction. The first element is at index 0. If negative, the index is counted from the end of the string/array.
// ?end (optional): The index at which to stop extraction (up to, but not including, this index)
let sli="Hello World"
console.log(sli.slice(0,8))

// String substring() - Extracts characters from both side of the string from start and end.
let sli1="Hello World"
console.log(sli1.substring(3,3))
// String substr()- Extracts a substring starting from an index and for a specified number of characters.
// Syntax - .substr(stert,length)
let sli3="Hello World"
console.log(sli3.substr(2,6))


// *********************************************************************************************************************************************************

// String toUpperCase()
console.log(val.toUpperCase())
// String toLowerCase()
console.log(val.toLocaleLowerCase())

// *********************************************************************************************************************************************************

// String trim() - The trim() method removes whitespace from both sides of a string:
let user="  My Name is Abhay        "
console.log(user.length)
console.log(user.trim())
// String trimStart()- The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(user.trimStart())
// String trimEnd() - The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(user.trimEnd())

// *********************************************************************************************************************************************************

// String padStart() - the padStart() method in javascript is used to pad or we can say shift the begiining(left side of string) with a specified character until the resultent string reaches the specified character
// this method is perticularly useful when you need to ensure that the string has a specific length
// ?Syntax - str.padStart(targetLength , "padString")
// ?targetLength: The length of the resulting string after the padding is applied. If the target length is less than or equal to the length of the original string, no padding is added.
let data = "abhay"
console.log(data.padStart(10,"H"))
// String padEnd()
// console.log(data.padEnd(10,"H"))
// To pad a number, convert the number to a string first.
let num=4
let num2=String(num)
console.log(num2.padStart(4,"0"))

// *********************************************************************************************************************************************************

// String repeat() - The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.
let test= "Hello World "
console.log(test.repeat(6))

// ********************************************************************************************************************************************************

// String replace() - The replace() method does not change the origional string it is called on.
// The replace() method returns a new string.
//? The replace() method replaces only the first match
// this method is case sensitive
let exe = "Please visit Microsoft and Microsoft!";
console.log(exe.replace("Microsoft","Google"))
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let exe2 = "Please visit Microsoft and Microsoft!";
console.log(exe2.replace(/MicRosOfT/i,"Google"))
//To replace all matches, use a regular expression with a /g flag (global match)
let exe3 = "Please visit Microsoft and Microsoft!";
console.log(exe3.replace(/Microsoft/g,"Google"))

// *****************************************************************************************************************************************************

// String split() - A string can be converted to an array with the split() method:
// text.split(",")  -- Split on commas
let test1 = "hello,my,name,is,abhay"
console.log(test1.split(","))
// text.split(" ")  -- Split on spaces
let test2 = "hello my name is abhay"
console.log(test2.split(" "))
// text.split("|")  -- Split on pipe
let test3 = "hello my |name is abhay"
console.log(test3.split("|"))
