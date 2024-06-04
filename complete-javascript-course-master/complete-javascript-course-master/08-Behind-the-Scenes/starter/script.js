'use strict';

//✈️✈️ An High-Level Overview of JavaScript

// Javascript is a high-level object-oriented multi-paradigm programming language.

// Javascript is a high-level, prototype based object-oriented, multi-paradigm, interpreted or just-in-time compiled,
// dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model. 🤣🤣😉

// DECONSTRUCTING THE MONSTER DEFINITION

// 1. High-level

// Any program needs resources such as memory and the CPU to do the work. There are low level languages such as C where you have to manually manage these resources. For example, asking the computer to create a new variable. On the other side, you have high-level languages such as javascript and python where we do not have to manage resources at all. Developer does not have to worry, everything happens automatically. Because these languages have so-called abstractions that take all of that work away from us. This makes the language easier to learn and use, but the downside is that programs will never be as fast or as optimized as C program. Now, one of the powerful tools that takes memory management away from us developers is garbage-collection.


// 2. Garbage-collected

// An algorithm inside javascript engine which automatically removes old, unused objects from the computer memory.

// 3. Interpreted or just-in-time compiled

// JS engine converts js code to machine code.  

// 4. Multi-paradigm

//  Paradigm: An approach and mindset of structuring code which will direct your coding style and technique.

// i. Procedural Programming (The one we have been doing so far)
// ii. Object-oriented programming (OOP)
///iii. Functional Programming (FP)

// 5. Prototype-based object-oriented

// Almost everything in js is an object except for primitive values such as numbers and strings etc. But arrays are just object.

// 6. First-class functions

// In language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions. Not all language has first-class functions.

// 7. Dynamic

// Dynamically-typed language. 

// EX: 
// let x = 23;    // No data type definitions. Types becomes known at runtime. 
// let y = 19;
// x = "Khalid" // Data type of variable is automatically changed. 


// 8. Single-threaded

// Concurrency model: how the JavasScript engine handles multiple tasks happening at the same time. 
// ⬇️
// Why do we need that?
// Javascript runs in one single thread. so it can only do one thing at at time.
// ⬇️
// So what about a long-running task? 
// Sounds like it would block the single thread. However, we want non-blocking behavior!
// ⬇️
// By using an "Event Loop": that takes long running task, executes in the "background" and puts them back in the main thread in the main thread once they are finished.


// 9. Non-blocking event loop



// ✈️✈️ The JavaScript Engine and Runtime

// A javascript engine is simply a computer program that executes javascript code. Every browser jas js engine. Google Chrome uses V8 engine. 

// Every JS Engine contains CALL STACK and HEAP. The call stack is where our code is actually  executed using something called execution context. Then heap is an unstructured memory pool which stores all the objects that our application needs.


// Computer Science Sidenote : Compilation vs Interpretation

// Compilation : Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer. 


//compilation                                    Execution
// Source Code:               ➡️        Portable file: machine code        ➡️        Program Running


// Interpretation: Interpreter runs through the source code and executes it line by line. COde is read and executed all at the   same time. Javascript used to be purely interpreted language. But the problem with interpreted language is that, they are much much slower than compiled languages. This used to be okay for javascript, but not now with modern javascript. Today low performance is no longer acceptable. 


//        Source Code      ➡️   Program Running         



// Many people still think that js is interpreted language but not anymore! modern javascript engine use a mix between compilation and interpretation.(JIT)                 

// Just-in-time (JIT) compilation: Entire code is converted into machine code at once, then executed immediately.

//compilation     //not a portable file               Execution
// Source Code:               ➡️               machine code                      ➡️        Program Running

// we still have 2 steps here but no portable file to execute and the execution happens immediately after a compilation.

// JS RUNTIME: we can imagine a js runtime as a big box or a big container. 
// Container including all the things that we need to use JavaScript. (in case in the browser)
// In order to use javascript in this case in the browser and the heart of any js runtime is always a js engine.
// without an engine, there is no runtime and there is no js at all. 
// however the engine alone is not enough, in order to work properly we also need access to the WEB APIs

// WEB APIs (Functionalities provided to the engine, accessible on window object)
// js simply gets access to these APIs through the global window object.
// WEB apis are also part of the runtime. 
// EX: DOM, Timers, Fetch API


// JS Runtime also contains "CALLBACK QUEUE"
// it is basically a data structure that contains all the callback functions that are ready to be executed. EX: Callback function from DOM event listener.

// EVENT LOOP: The event loop takes callback functions from the callback queue and puts them in the call stack so that they can be executed. Event loop is the reason why javascript's non-blocking concurrency model is implemented. 




// ✈️✈️ Execution Contexts and The Call Stack  ( How javascript code works behind the scenes)

// Execution Context : Environment in which a piece of javascript is executed. Stores all the necessary information for some    code to be executed. Follow Slides for more info.


// ✈️✈️ SCOPING AND SCOPE IN JAVASCRIPT : CONCEPTS

// each execution context has a variable environment, scope chain and this keyword.

// Scoping: How our program's variables are organized and accessed. Where do variables live? Where can we access a certain variable and where not?

// Lexical Scoping: Scoping is controlled by placement of functions and blocks in the code.

// Scope: Space or environment in which na certain variable is declared. There is global scope, function scope and block scope.

// Scope of a variable: Region of our code where a certain variable can be accessed. 

// i . GLobal Scope     ii. Function Scope   iii. Block Scope (ES6) 

const a = 'Khalid';

first();

function first() {
    const b = 'Hello!';
    second();

    function second() {
        const c = 'Hi!';
        third();
    }
}

function third() {
    const d = 'Hey!';
    // console.log(d + c + b + a); // Reference error
}



// Summary

// Scoping asks the question "Where do variables live?" or "Where can we access a certain variable and where not?"
// There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks
// Only let and const variable are block-scoped. Variable declared with var end up in the closest function scope.
// In Javascript, we have lexical scoping, so the rules of where can we access variables are based on exactly where in the code functions and blocks are written.
// Every Scope always has access to the all variables from all it's outer scopes. This is the scope chian!
// When a variable is not in the current scope, then engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup.
// The scope chain is one-way street: a scope will never, ever have access to the variables of an inner scope.
// The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scope.
// The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!


// ✈️✈️ Scoping in Practice

// Scope chaining is a one way street. child scope can access parent level var. but parent level can not access child level var. 

function calcAge(birthYear) {
    const age = new Date().getFullYear() - birthYear;
    console.log(firstName);

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Mahmud'; // js first look into current scope then perform scope chain. if it is found in the current scope, then lookup does not work 😉
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) //block scoped function (make sure it's in strict mode, without strict, it works!)
            {
                return a + b;
            }
        }
        // console.log(str); str is not defined because const and str are block scoped! 
        console.log(millenial);
        //console.log(add(2, 3)); Reference error
    }

    printAge();

    return age;
}

const firstName = 'Khalid';
calcAge(1996);
// console.log(age); 
// printAge();