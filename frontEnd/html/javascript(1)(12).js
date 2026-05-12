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
console.log(typeof null).  //obejct
console.log(typeof [1,2,3,4]) //object
console.log(typeof {name:"akshat"})
console.log(typeof function(){})

//js ky ander array ko special kind of object mana jata hai
[1,2,3,4]


{
0:1
1:2
2:3
3:4
length:4
}

//it is a bug of js. 
// early 1995. jo values they are stored in binary type tags
// obejcts 000
// null was represented as all zero bits 000

// null-->000-->interprated as object 


//


//event looping in js

//single threaded language


// saray task ek ek krky run hoty hai 

// agar ek task chl rha hai tab tk usra task shuru nhi ho skta 

// call stack ky ander jitny bhi task hoty hai vo synchronus way mai perform hoty hai 


// why js is async 

//api calls
//set timeout 

// sbkuch block ho jana chiye kuki ye multitask nhi kr skti according to its defination 

// js is single threaded 

//async behaviour of js 

//js is a restaurant 

// call stack   (chef)
//   code execute line by line
//.  only one task at a time

// web apis (kitchen helpers)
   // provided by the browser
   //it handles async tasks 
     //settimeout.  timer 
     //fetch     to get data from the backedn


// call back queue (waiting area)
   //complted async task
// event loop (manger)
 //checks is call stack empty? or agr empty hai toh jo waiting are mai task hai unko callk stack mai dal do


//          [ CALL STACK ]
//               ↓
//         (empty ?)
//               ↓ YES
//    ┌───────────────┐
//    │ MICROTASKS 🔥 │  ← Promise.then()
//    └───────────────┘
//               ↓
//    ┌───────────────┐
//    │ MACROTASK 🕒  │  ← setTimeout
//    └───────────────┘
//               ↓
//            Repeat


//                 ┌───────────────────────┐
//                 │      CALL STACK       │
//                 │   (Executes Code)     │
//                 └─────────┬─────────────┘
//                           │
//                           ▼
//                 ┌───────────────────────┐
//                 │      WEB APIs         │
//                 │ (setTimeout, fetch)   │
//                 └─────────┬─────────────┘
//                           │
//           ┌───────────────┴────────────────┐
//           ▼                                ▼
// ┌───────────────────────┐     ┌───────────────────────┐
// │   MICROTASK QUEUE     │     │   MACROTASK QUEUE     │
// │ (Promises, then)      │     │ (setTimeout, events)  │
// └─────────┬─────────────┘     └─────────┬─────────────┘
//           │                             │
//           └───────────────┬─────────────┘
//                           ▼
//                 ┌───────────────────────┐
//                 │      EVENT LOOP       │
//                 │  (The Manager 🧠)     │
//                 └─────────┬─────────────┘
//                           │
//                           ▼
//                 ┌───────────────────────┐
//                 │      CALL STACK       │
//                 │   (Runs Tasks Again)  │
//                 └───────────────────────┘

