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
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;


            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Mahmud'; // js first look into current scope then perform scope chain. if it is found in the current scope, then lookup does not work 😉

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) //block scoped function (make sure it's in strict mode, without strict, it works!)
            {
                return a + b;
            }

            // const output = 'NEW OUTPUT!';
            output = 'NEW OUTPUT!';
        }
        // console.log(str); str is not defined because const and str are block scoped! 
        console.log(millenial);
        //console.log(add(2, 3)); Reference error
        console.log(output); // NEW OUTPUT!
    }

    printAge();

    return age;
}

const firstName = 'Khalid';
calcAge(1996);
// console.log(age);
// printAge();


// ✈️✈️ Variable Environment: Hoisting and The TDZ

// An Execution context always contains three parts.

// EXECUTION CONTEXT
// i. 👉 Variable environment 
//ii.Scope Chain 
//iii.this keyword

// we already learned Scope Chain. let's learn Variable Environment. In particular how variables are created in javascript.
// in js, we have a mechanism called 'hoisting'.



// Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope."

// ⬇️ Behind the Scenes ⬇️

// Before execution, code is scanned for variable declarations and for each variable a new property is created in the "variable environment object".

// behind the scenes the code is basically scanned for variable declarations before it is executed.  This happens during the so called creation phase of the execution context that we talked before.

// Then for each variable that is found in the code, a new property is created in a variable environment object. That's how hoisting works.


// many people simply define hoisting by saying that variables are magically lifted or moved to the top of their scope for example, to the top of a function. And that is actually what hoisting looks like on the surface.But behind the scenes that's in fact not what happens. Instead, behind the scenes the code is basically scanned for variable declarations before it is executed.

// But hoisting does not work the same for all the variable types.

// Follow

// we still tried to access the variable while in the TDZ like we actually do in the first line of this if block, then we get a reference error telling us that we can't access job before initialization.
// So exactly as we learned in the last slide, right ? However, if we tried to access a variable that was actually never even created, like in the last line here where we want to log x, then we get a different error message saying that x is not defined at all.What this means is that job is in fact in the Temporal Dead Zone where it is still initialized,
// but the engine knows that it will eventually be initialized because it already read the code before and set the job variable in the variable environment to uninitialized. Then when the execution reaches the line where the variable is declared, it is removed from the Temporal Dead Zone.

/*
const myName = 'Khalid';

if (myName === 'Khalid') {
    console.log(`Khalid is a ${job}`); // Reference error, can not access 'job' before initialization
    const age = 2037 - 1989;
    console.log(age);

    const job = 'teacher';
    console.log(x); // Reference error: x is not defined
}

*/


// ✈️✈️Hoisting and TDZ in Practice

// Hoisting with variables

console.log(me); // undefined

console.log(job); // Reference error: can not access before initialization. (Job var. is still in the temporal death zone at this point. Temporal Death Zone of a var. is declared with let or const)

console.log(year); // Reference error: can not access before initialization (year var. is still in the temporal death zone at this point. Temporal Death Zone of a var. is declared with let or const)

var me = 'Khalid';
let job = 'programmer';
const year = 1991;

// Hoisting with Functions

console.log(addDecl(2, 3)); // 5; we were able to call the 'function declaration' before it was actually defined here in the code.

console.log(addExpr(2, 3)); // Uncaught Reference Error: Can't access 'addExpr' before initialization. (because js treats function as variable and it is simple a const variable too! addExpr() is in temporal death zone!)

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(addVarFunctionExpression(2, 3)); // Uncaught TypeError: addVarFunctionExpression is not a function
console.log(addVarFunctionArrow(2, 3)); // Uncaught TypeError: addVarFunctionArrow is not a function

// Reason? because var will be hoisted and set to undefined. here we are trying to call undefined basically.
// undefined(2,3) 
// this is why we are getting '.... not a function' error

var addVarFunctionExpression = function (a, b) {
    return a + b;
}

var addVarFunctionArrow = (a, b) => a + b;

// So, hoisting actually works with function declaration!

// Why we should not use var? here is the  example:

// when there is no shopping cart, delete this shopping cart!

console.log(numProducts); // undefined

if (!numProducts) { // undefined due to hoisting. it treats like this if(!undefined) 
    deleteShoppingCart(); // it will be called even if have 10 products! 
    // why that happen? it's because of hoisting. 
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

// Don't use var to declare a variable.
// Use const most of the time to declare variables.
// and let if you really need to change a variable later.
// ☢️☢️ In order to write clean code, you should declare your variables at the top of each scope. ☢️☢️
// ☢️ Always declare all your functions first and use them only after the declaration. This applies to all type of functions. even function declarations which are hoisted. ☢️


// another example
var x = 1;
let y = 2;
const z = 3;

console.log(window);

console.log(x === window.x); // true
console.log(y === window.y); //false 
console.log(z === window.z); //false

// this proves that variable declared with var keyword creates a property on window object.



//✈️✈️ The this keyword. (How the THIS keyword works)

// EXECUTION CONTEXT
// i.  Variable environment
//ii.Scope Chain
//iii. 👉 this keyword

// this keyword/variable: Special variable is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used.

// this is not static. it depends on how the function is called and its value is only assigned when the function is actually called.

// Method 👉 this = <Object that is calling the method>
// Simple function call 👉 this = undefined (in strict mode, otherwise window object of the browser.)
//  Arrow functions 👉 this = <this of surrounding function (lexical this) ; arrow function does not have this
// Event listener 👉 this = <DOM element that is handler is attached to>

// another way of calling function in js
// new, call, apply, bind



// ✈️✈️ The this keyword in Practice
// this keyword always point to the object that is calling the method.
console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined
}

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // window
    // because arrow function use this keyword of it's parent scope 
    // arrow function does not have own this keyword.
}

calcAgeArrow(1997);


const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this); // jonas object
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

// this keyword always point to the object that is calling the method. Prove?

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// as you can see this keyword is really dynamic. it is not static and depend on how the functions is called.

const f = jonas.calcAge;
f();


// ✈️✈️ Regular Functions vs. Arrow Functions

var firstName2 = 'Matilda'; // var keyword creates properties on the global object.

const khalid = {
    firstName2: 'Khalid',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        const self = this;


        /* const isMillenial = function () {
             console.log(this); // undefined, rule s says that inside a regular function call, this keyword must be undefined
             console.log(this.year >= 1981 && this.year <= 1996);
         }
 
         isMillenial(); */

        //solution 1: before ES6 APPROACH
        /*
        const isMillenial = function () {
            console.log(self); // undefined, rule s says that inside a regular function call, this keyword must be undefined
            console.log(self.year >= 1981 && self.year <= 1996);
        }

        isMillenial(); */

        // SOLUTION 2: Using arrow function 
        // here arrow function simply use the this keyowrd of its parent scope.
        const isMillenial = () => {
            console.log(this); // undefined, rule s says that inside a regular function call, this keyword must be undefined
            console.log(this.year >= 1981 && this.year <= 1996);
        }

        isMillenial();

    },

    // TIPS: you should never ever use arrow function as a method. since it does not contain this keyword property.
    /* greet: () => {
        console.log(this); //window
        console.log(`Hey ${this.firstName2}`); // that's another reason why we shouldn't use var.
    } */

    greet: function () {
        console.log(this);
        console.log(`Hey ${this.firstName2}`);
    }
}

khalid.greet();
khalid.calcAge();


// another difference between arrow and regular function is 'argument keyword'
// Regular functions do have 'arguments' keyword
// Arrow functions do not have 'arguments' keyword
// though in modern js 'arguments' keyword is not necessary.  We use Rest Parameters

const add1 = function (a, b) {
    console.log(arguments);
    return a + b;
}

add1(2, 5);
add1(2, 5, 8, 12);

const add2 = (a, b) => {
    console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return a + b;
}



// ✈️✈️ Primitives vs. Objects (Primitive vs Reference Types)

// Primitives are like numbers, strings, booleans etc


// Primitives: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Objects: Object literal, Arrays, Functions and many more...

// JS ENGINE : CALL STACK, HEAP

// ALL our object types are stored right in the memory heap.
// Primitives are stored in the CALL STACK. Primitive types are stored in 'Execution contexts' in which they are declared.

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me', me);
