'use strict';

// An High-Level Overview of JavaScript

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





