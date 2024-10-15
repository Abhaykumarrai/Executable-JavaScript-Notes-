//In real life, objects are things like: houses, cars, people, animals, or any other subjects.
//Properties are the features of the object, for example if car is a object then his color,size,model are the properties.
//Methods are the function of the object such as in case of car the method id car.start(),car.stop.




//*************************************************** Diffrent way to create an object ************************************************************

//************************************************** */ 1- Object literals (Object cunstructor method) ********************************************
//- In JavaScript, the object literal method is one of the most straightforward ways to create objects. It allows you to define an object by directly listing its properties and their values within curly braces ({}). This method is simple and concise.
//An object literal is a list of name:value pairs inside curly braces {}.
//name:value pairs are also called key:value pairs.
//object literals are also called object initializers.

const user={
    name : "Abhay",                   //key is here name and value is Abhay,behind the seen js refer key as string
    Age : 22,
    Add : "unit e"
}

console.log(user.name)                //most of the time we use this one 
console.log(user["name"])

user.name="aman";                     // To change the value of key
console.log(user.name)

Object.freeze(user)                   //We can freeze the object to prevent value change
user.name="anmol"




//****************************************IMPORTANT***************************************************************************************** 
console.log(Object.values(user))  // it will give the value of user object in array datatype
console.log(Object.keys(user))
console.log(Object.entries(user))







//**********************************2- By using new keyword*************************************************************************************
//But, we can also create without using new keyword
//Advice - For readability, simplicity and execution speed, use the object literal method.

const user2 = new Object()
user2.name = "abhay"

console.log(user2.name)








//************************************************Nested Object - Object inside Object************************************************************
const user3 ={
    user4 :{
        user5 : {
           name:"Abhay kumar Rai"
        }
    }
}

console.log(user3.user4.user5.name)






//**********************************************************Methods in Object******************************************************************** 
//Methods in objects - Object methods are actions that can be performed on objects.
// A method is a function definition stored as a property value.

const testmethod= {
    firstname : "guddi",
    lastname : "devi",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}
console.log(testmethod.fullname())

testmethod.addname = function(){                                // we can also create function outside the object
    console.log("this is the first add function");
}
console.log(testmethod.addname())







//********************HOW TO MEARGE TOW OBJECTS************************************************************************************* 

const add1 = {1:"a",2:"b"}
const add2 = {3:"a",4:"b"}
const add3 = {5:"a",6:"b"}

const add4 = Object.assign(add1,add2,add3)
console.log(add4)

//Note , syntax provided by MDN - const add4 = Object.assign(target,source)

const add5 = Object.assign({},add1,add2,add3)     // here {} is tareget where add1,add2,add3 are get mearged and the datatype and value add5==={} same 
console.log(add5)


const add6 = {...add1,...add2,...add3}     // most of the time we add this way in this way js first spread all the value and then add all of them in object add6
console.log(add6)




//***************************************************** Check property in Object *************************************************************************
//How to check wether the property in object exists or not 

const cid={
    cname:"gumnam"
}

console.log(cid.hasOwnProperty("cnme"))   //this will return the value in boolean



//*********************************************************Object De-structure*******************************************************************************
//if we want to access any property multiple time, so every time we have to access like this object.property,
//But with object destructure we can directly access the property 

const test = {
    name:"abhay",
    Add:"unit E"
}

console.log(test.Add)  //without object destructure

const {Add} = test     //with object destructure
console.log(Add)