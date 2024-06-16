//An Overview of Modules in JavaScript

// Module : Reusable pice of code that encapsulates implementation details.

// Usually a standalone file, but it doesn't have to have.

// Why Module?

// 1. Compose software : Modules are small building blocks that we put together to build complex applications. For example

// So let's take this digital camera.

// You can see that this specific camera is basically made up of all these modules that we can see here.
// And this is exactly how we can compose software using modules as well. Another big advantage of these camera modules is that each of them can be developed in complete isolation. So you can have one engineer working on the lens and another one on the screen and even another one on the controller module. And the best part of this is that each engineercan actually work on their own module without even understanding what the other engineers are doing. And also without understanding
// how the entire final camera works itself. And so isolating components is another huge advantage of using modules. And again, isolating components essentially means that each module
// can be developed in isolation without the developer having to think
// about the entire code base.He doesn't even need to understand all of it, which makes it really easy to collaborate on a larger team.


// 2. Isolate Components: Modules can be developed in isolation without thinking about the entire codebase.

// 3. Abstract Code: Implement low-level code in modules and import these abstractions into other modules.

// 4. Organized code: Modules naturally lead to a more organized codebase.

// 5. Reuse code: Modules allow us to easily reuse the same code, even across multiple projects.

// Javascript has a native built-in module system. We did have modules before ES6 but we had to implement them ourselves or use external libraries.

// ES6 MODULES : Modules stored in files, exactly one module per file.

// now you might be thinking script are also file, what's the difference then?

// Modules vs Scripts

// Modules: All top level variables are scoped to the modules. so basically variables are private to the modules by default. And the only way an outside module can access a value that's inside of a module is by exporting that value. if we don't export then no one from the outside can see the variable.

// On the other hand, in scripts, all top level variables are always global and this can lead to problem like global namespace pollution where multiple scripts try to declare variables with the same name. So, private variables are the solution to this problem and that is why ES6 modules implemented it like this.

// Next ES6 modules are always executed in strict mode. while in scripts are executed in 'Sloppy Mode'

// In ES6 modules, top level this points to 'undefined' and in script mode this points to window object.


// Exporting and Importing in ES6 Modules

// importing module

// all the imported statements are hoisted at the top of the file.

/*
import {
    addToCart,
    totalPrice as price,
    tq
} from './shoppingCart.js';



console.log('Importing module');

console.log('bread', 5);
console.log(price, tq);

*/


console.log('Importing module');

//basically ShoppingCart will be an object containing everything that is exported from the module.
/*
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
*/


// we can give any name instead of add
// import add from './shoppingCart.js';

// we could also write like this, mixing default and named exports

// but this approach is not recommended
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// add('pizza', 2);


import add, { addToCart, cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart); // this proves that it is not a simply a copy of the value that we exported here. It is a live connection.


// Top-Level await

// we can use await keyword outside of async function in modules which we call top-level await.

//await is working outside of any asnyc function.

/*
console.log('Start fetching');
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

const data = await res.json();

console.log(data);

// this actually blocks the entire module now.
console.log('Something');

*/

const getLastPost = async function () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const data = await res.json();

    console.log(data);
}

const lastPost = getLastPost();
console.log(lastPost);

//Not very clean
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);



// Module Pattern

// The main goal of the module pattern is to encapsulate functionality to have private data and to expose a public API. The best way of achieving all that is using a function because function give us private data by default and allow us to return value which can become our Public API.

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({
            product,
            quantity
        });
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //undefined

// This is the implementation of Module Pattern. Now do you understand why and how it works? It works because of closure.

// This is how module pattern works and it works pretty well and it has been working for long time for developers. So long before ES6 modules even existed in javascript.

// But the problem with this approach is if we wanted one module per file like we have with ES6 modules, then we would have to create different scripts and link all of them in the HTML file. Then it creates some couple of problem.

// i. we have to be careful in which order we declare them in HTML.
// ii. we would have all the variables living in the global scope.
// iii. finally, we also couldn't bundle them together using a module bundler.

// That's the reason why native modules were added to the language in ES6.



// CommonJS Modules

// Besides native ES Modules and the module pattern, there are also other module system that have been used by js in the past. But they are not native js, so they relied on some external implementations. Two examples are i) AMD Modules ii) CommonJS Modules.

// Now, CommonJS Modules are important for us because they they have been used in Node JS.


// Export
/*
export.addToCart = function (product, quantity) {
    cart.push({
        product,
        quantity
    });
    console.log(`${quantity} ${product} added to cart`);
}

// Import
cons { addToCart } = require('./shoppingCart.js');

*/


// A brief Introduction to the Command Line

// Before we use a tool like parcel, we first need to learn a little bit about the Command Line. All of these build tools are available on NPM only work in the Command Line.

// Open vs code terminal

// First Command : ls
// this will show you the content of current folder.

// cd .. (move back from current folder)

// cd ../.. (move back 2 levels)


// clear

// mkdir TEST (will create TEST folder)

// edit index.html (will create html file; edit command creates a new file)

// move a file to a specific location

// mv fileName Location
// mv index.js .../

// rmdir TEST (rmdir deletes a folder)





////////////////////////////////////////////////
// INTRODUCTION TO NPM

// NPM => Node Package Manager

// npm init
// Installing LeafLet Library
// npm i leaflet
// Installing Lodash Library
// npm i -g npm
// npm i --save lodash


// this is a nested object
const state = {
    cart: [
        {
            product: 'bread',
            quantity: 5
        },
        {
            product: 'pizza',
            quantity: 5
        }
    ],
    user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = structuredClone(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);


////////////////////////////////////////

// REVIEW: Writing Clean and Modern JavaScript.

// READABLE CODE
// 👉 Write code so that others can understand it.
// 👉 Write code so that you can understand it in 1 year
// 👉 Avoid too "clear" and overcomplicated solutions.
// 👉 Use descriptive variable names: what they contain
// 👉 Use descriptive function names: what they do


// General
// 👉 Use DRY principle. (refactor your code)
// 👉 Don't pollute global namespace, encapsulate instead
// 👉 Don't use var
// 👉 Use Strong type checks (=== and !=)


// Functions
// 👉 Generally, functions should do one thing.
// 👉 Don't use more than 3 function parameters.
// 👉 Use default parameters whenever possible
// 👉 Generally, return same data type as received.
// 👉 Use arrow functions when they make code more readable.


// OOP
// 👉  Use ES6 classes.
// 👉  Encapsulate data and do not mutate it from outside the class.
// 👉 Implement method chaining.
// 👉 Do not use arrow functions as method in regular objects.

// Avoid Nested Code
// 👉 Use early return (guard clauses)
// 👉 Use ternary (conditional) or logical operators instead of if
// 👉 Use multiple if instead of if/else-if
// 👉 Avoid for loops, use array methods instead
// 👉 Avoid callback-based asynchronous APIs

// ASYNCHRONOUS CODE
// 👉 Consume promises with async/await for best readability
// 👉 Whenever possible, run promises in parallel. (Promise.all)
// 👉 Handle errors and promise rejections. 
