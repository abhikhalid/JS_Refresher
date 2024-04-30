'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex=1, mainIndex=0,time='20:00', address}){
    console.log(`{Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: (ing1,ing2,ing3) =>{
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: (mainIngredient,...otherIngredient)=>{
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};

// 6. Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};

//  OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//or
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignemnt operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest1.owner = rest1.owner && `<ANONYMOUS>`;
rest2.owner = rest2.owner && `<ANONYMOUS>`;

console.log(rest1);
console.log(rest2);

rest1.owner &&= `<ANONYMOUS>`;
rest2.owner &&= rest2.owner && `<ANONYMOUS>`;

console.log(rest1);
console.log(rest2);






// 5. Short Circuiting

// Use any data type, return any data type, short-circuiting

// If the first operand is truthy here in the OR operator, then the other operand will not even evaluated.
// That's what we mean short circuiting.

// OR Operator



 console.log(3 || 'Khalid'); // 3
 console.log('' || 'Mahmud');
 console.log(true || 0);
 console.log(undefined || null);
 console.log (undefined || undefined);
 console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//  restaurant.numGuests = 23;
 restaurant.numGuests = 0; //not work when it is 0
 const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
 console.log(guests1);

 const guests2 = restaurant.numGuests || 10;
 console.log(guests2);

 // Solution of above problem?

 // Nullish Coalescing Operators : null or undefined (NOT 0 or '')
 const guestCorrect = restaurant.numGuests ?? 10;
 console.log(guestCorrect);


// AND Operator (exact opposite way of OR operator)

// AND operator short circuits when the first value is falsy

console.log(0 && 'Khalid'); //0
console.log(7 && 'Khalid');
console.log('Hello' && 23 && null && 'jonas'); // null

// Practical Example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach');
}

//or

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');


//summary
// The OR operator will return the first truthy value of all the operands, or simple the last value if all of them are falsy.
// AND operator will return the first falsy value or the last value if all of them are truthy.





// 4. Rest Pattern and Parameters

// To Collect multiple elements and condense them into an array.
// Opposite of Spread Operator

// rest operator must be the last


// i. Destructuring
// SPREAD, because on RIHGT SIDE OF =
/*
const arr = [1,2, ...[3,4]];
console.log(arr);

// REST, because on LEFT side of
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza,risotto,...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza,risotto,otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


// ii. Functions

const add = (...numbers)=>{
  //console.log(numbers);
  return numbers.reduce((acc,curr)=>  acc+curr,0);
}

console.log(add(2,3));
console.log(add(5,3,7,2));
console.log(add(8,2,5,3,2,1,4));

const x = [23,5,7];
console.log(add(...x));

restaurant.orderPizza('mushrooms','onion','olives','spanich');

*/

// 3. The Spread Operator (...)
// we can only use spread operator when building arrays or when we pass values into a function
/*


const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Polau'];
console.log(newMenu);
console.log(...newMenu);

//  Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);


// Iterables: arrays, strings,maps, sets, not Objects

const str = 'Khalid';
const letters = [...str,' ','Mahmud'];
console.log(letters);

//not gonna work here, because multiple values seperated by comma is not expected here
// console.log(`${...str} Mahmud`);

// multiple values seperated by comma are only expected when we pass argument into a function
// or when we build new array

const ingredients = [prompt(`Let's make pasta!
Ingredient 1?`), prompt(`Let's make pasta!
Ingredient 2?`), prompt(`Let's make pasta!
Ingredient 3?`)];

console.log(ingredients);

restaurant.orderPasta(...ingredients);



//  objects

const newResturant = {foundedIn: 1998,
...restaurant, founder: 'Guiseppe'};

console.log(newResturant);


// let's make a copu of restuarant

const restuarantCopy = {...restaurant};
restaurant.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restuarantCopy.name);


*/

// 2. Destructuring Objects

/*

const {name, openingHours, categories} = restaurant;
console.log(name,openingHours,categories);


const {name: restaurantName, openingHours: hours,categories: tags} = restaurant;
console.log(restaurantName,hours,tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu,starters);

let a = 111;
let b = 999;
const obj = {a:23, b : 7, c: 14};

({a,b} = obj);
console.log(a,b)

// Nested objects

const {fri: {open:o,close:c}} = openingHours;

// console.log(fri); //fri is not defined here, error

console.log(o);
console.log(c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
 });


 */

// 1. Destructuring Arrays
/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];


const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);


const [first,second] = restaurant.categories;
console.log(first,second);

let [main, secondary] = restaurant.categories;
console.log(main,secondary);

// let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main,secondary);


[secondary,main] = [main,secondary];
console.log(main,secondary);

// returns an array
const [starter,mainCourse] = restaurant.order(2,0);

console.log(starter,mainCourse);

const nested = [2,4,[5,6]];
console.log(nested[2]);

const [i, ,j] = nested;
console.log(i,j);

const [s, ,[t,p]] = nested;
console.log(s,t,p);

//Default Values
const [p=1, q=1,r=1] = [8,9];
console.log(p,q,r);

*/
