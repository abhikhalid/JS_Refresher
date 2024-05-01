'use strict';

const openingHours = {
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
};

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

  // openingHours: openingHours,

  openingHours, // ES6 object literals

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // order: function(starterIndex, mainIndex){
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // ES6 object literals
  order(starterIndex, mainIndex){
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


const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7)); // 7-4 = extracted string no. 3

console.log(airline.slice(0, airline.indexOf(' '))); // 4-0 = 4
console.log(airline.slice(0, airline.lastIndexOf(' '))); // 8-0 = 4
console.log(airline.slice(0, airline.lastIndexOf(' ') +1)); // 8-0 = 4

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));


const checkMiddleSeat = (seat) =>{
  // B and E are middle seats
  const s = seat.slice(-1);

  return (s === 'B' || s === 'E');
}

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23C'));
console.log(checkMiddleSeat('3E'));


const question = new Map([
  ['question','What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'Correct 😸'],
  [false,'Try again!'],
]);

console.log(question);

// Quiz app
console.log(question.get('question'));

for(const [key,value] of question){
  if(typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt(`Your answer`));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


// Now the question is, string is a primitive data type. then how does it has methods?
// Behind the scene js converts our string to object. this process is callled boxing.
// it takes our string and puts it into a box
// it convers somethig like this behind the scene
console.log(new String('Khalid'));
console.log(typeof new String('Khalid')); //object

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalizaton in name
const passenger = 'jOnAS'; // Jonas

console.log(passenger[0].toUpperCase() + passenger.slice(1).toLowerCase());

// Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

console.log(loginEmail.toLowerCase().trim() === email);


// replacing
const priceGB = '288,97@';
const priceUS = priceGB.replace(',','.').replace('@','$');

console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replace('door','gate')); //first door will be replaced by gate
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const airplane = 'Airbus A320neo';
console.log(airplane.includes('A320'));
console.log(airplane.includes('Boeing'));
console.log(airline.startsWith('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items){
  const baggage = items.toLowerCase();

  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed on board');
  }else{
    console.log('Welcome abroad!');
  }
}

checkBaggage('I have a laptop, some Food and pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

console.log(`a+very+nice+string`.split('+'));
console.log(`Jonas Schmedtmann`.split(' '));

const [firstName,lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);


const capitalizeName = (name) => {
  console.log(name.split(' ').map(n => n[0].toUpperCase()+n.slice(1).toLowerCase()).join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('khalid MaHmud');


// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25,'+')); // string length is 25
console.log('Jonas'.padStart(25,'+').padEnd(30,'+'));


const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length,'*');
}

console.log(maskCreditCard(456465591));


// Repeat

const message2 = 'Bad Weather... All Departues Delayed';
console.log(message2.repeat(5));


const planesInLine = (n) =>{
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);


// Maps: Fundamentals
const rest = new Map();
rest.set('name','Sultans Dine');
rest.set(1,'Bangladesh, Gulshan');

console.log(rest.set(2,'Dhaka,Pabna'));

rest
.set('categories', ['Italian','Pizzeria','Vegetarian','Organic'])
.set('open',11)
.set('close',23)
.set(true, 'We are open :D')
.set(false,'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 23;

console.log(rest.get(time> rest.get('open') && time == rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest);
console.log(rest.size);

rest.set([1,2],'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get([1,2])); //undefined, because they are not same object in the heap

// so the solution is

const arr = [1,2];
rest.set(arr,'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));


// Sets
const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza']);
console.log(ordersSet); //all the duplicates are gone!

// string are also iterable
console.log(new Set('Jonas'));
console.log(ordersSet.size); // how many different meals will be cooked

console.log(ordersSet.has('Pizza')); // similar to includes method in arrays
console.log(ordersSet.has('Bread'));

// in set, order is not important

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

console.log(ordersSet);
ordersSet.delete('Risotto');
console.log(ordersSet);

// ordersSet.clear();
// sets are iterable, so can loop over it elements
for(const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);

console.log(new Set('Khalidd').size);



// Looping Objects: Object Keys, Values and Entries

// we can loop over arrays which are iterable
// but we can also loop over objects which are not iterable

//PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`

for(const day of properties){
  openStr += `${day}`;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);


//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key,{open,close}] of entries){
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}




// Optional Chaining

// console.log(restaurant.openingHours.mon.open); // error
console.log(restaurant.openingHours.thu);

if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
}

//with optional chaining
//return undefined if 'mon' does not exist!
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.mon.open);//type error


// Example

const days = ['mon','tue','wed','thu','fri','sat','sun'];

for(const day of days){
  // const open = restaurant.openingHours[day]?.open || 'closed';
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotoo?.(0,1) ?? 'Method does not exist!');

// Arrays
const users = [
  {
    name:  'Khalid',
    email: 'khalid@gmail.com'
  }
];

console.log(users[0]?.name ?? 'User array empty');

//old approach
if(users.length > 0) console.log(users[0].name);
else console.log(`user array empty`);


// 7. Looping Arrays : The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const item of menu.entries()){
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for(const {index,element} of menu.entries()){
  console.log(`${index+1}: ${element}`);
}


console.log([...menu.entries()]);


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


// String Methods Practice

const allFlights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


// first solution
// allFlights.split('+').forEach(flight =>{
//    let pieces = flight.split(';');
//    console.log(`${pieces[0].split('_').join(' ').slice(1)}  from ${pieces[1].slice(0,3).toUpperCase()} to ${pieces[2].slice(0,3).toUpperCase()} (${pieces[3].split(':')[0]}:${pieces[3].split('h')[1]})`);
// })


// second solution (smart way!)

const getCode = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')){
  const [type,from,to,time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⚽' : ''}${type.replaceAll('_',' ')}${getCode(from)}${getCode(to)}(${time.replace(':','h')})`;
  console.log(output);
}

