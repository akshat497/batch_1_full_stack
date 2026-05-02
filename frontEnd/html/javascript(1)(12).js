console.log("Hello, World! external JavaScript file is working.");


//what are declaratives let var and const

// we have 3 types of declarative in js 

// understanding how js stores variables 

//js has 2 phases 


//creation phase (memory allocation phase)

// code ko scan krta hai or phir variable ko register krta hai memory mai 

//execution phase
// code line by line run krta hai  


// var - the old way 


// function scoped 
// hoisted with undefined 
// redeclare kiya ja skta hai
// redefine bhi kiya ja skta hai
// debugger
// console.log(a)


// console.log(name)

// let name="akshat";

// let and const are block scoped 

// tdz

// temopral dead zone

// exist to krta hai memory mai 
// lakin initialize nhi hai





// what is hoesting in js 


// js move every variable on the top of the code why?


// whyjs moves every variable on the top of the code?


// js allocates memory before execution 



//var attach ho jata hai global object ky sath


//let and const are block scoped


let a=10;

{
    let a=20;
    a=30
    console.log(a)
}

// {
//     const a=20;
//     a=30
//     console.log(a)
// }

//data types in js

//premetive and non premetive data types hoty hai


//string.     "akshat"
//number.     12 23 22
//boolean.     true false
//undefined.      jisko define na kiya gaya ho
//null            emty value

//non premetive data types 

// Array
// objects
// functions

console.log(typeof "akshat")
console.log(typeof 12)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof [1,2,3,4])
console.log(typeof {name:"akshat"})
console.log(typeof function(){})


//
