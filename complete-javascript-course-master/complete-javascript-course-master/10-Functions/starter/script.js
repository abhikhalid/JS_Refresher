'use strict';

/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


///////////////////////////////////////

// Functions Accepting Callback Functions
/*
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');

    //console.log(first);
    //console.log(...others);

    return [first.toUpperCase(), ...others].join(' ');
}

// Higher Order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string. ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

//we are only passing upperFirstWord function as a value. not calling it
transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = () => {
    console.log('👋');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


//Functions Returning Functions

const greet = (greeting) => {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey'); // return value is function

greeterHey('Jonas'); // Hey Jonas
greeterHey('Khalid'); // Hey Khalid

greet('Hello')('Mahmud');

*/

//This will become extremely helpful in functional programming

// The call and apply methods

// call, apply and bind method allows us to set this keyword manually to any function call

/*
const BangladeshBiman = {
    airline: 'Bangladesh Biman',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            name
        });
    }
}

BangladeshBiman.book(239, 'Khalid');
BangladeshBiman.book(635, 'Mahmud');
console.log(BangladeshBiman);

const usBangla = {
    airline: 'US Bangla',
    iataCode: 'EW',
    bookings: [],
};

const book = BangladeshBiman.book;

//DOES NOT WORK
//book(23, 'Israr');

book.call(usBangla, 23, 'Israr');
console.log(usBangla);

book.call(BangladeshBiman, 239, 'SRK');
console.log(BangladeshBiman);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);


//Apply Method
//It's not used anymore in modern javascript

const flightData = [583, 'Chowdhury'];

book.apply(swiss, flightData);
console.log(swiss);

//or
book.call(swiss, ...flightData);



//Allows us to manually set the this keyword for any function call

//The Bind Method

//BIND method does not call the function immediately,
//insteas it returns a this object
const bookUS = book.bind(usBangla);

bookUS(23, 'Steven Williams');

const booksUS23 = book.bind(usBangla, 23);
booksUS23('Saif');

const booksUS24 = book.bind(usBangla, 23, 'Suvo');
booksUS24();

//this keyword always points to the element on which that handler is attached to.
//this keyword is set dynamically.

usBangla.planes = 300;
usBangla.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click',
    usBangla.buyPlane); //NaN

document.querySelector('.buy').addEventListener('click',
    usBangla.buyPlane.bind(usBangla));  //now it works


//Partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));


//Challenge : do the same task with using function returning function
const addTax2 = (rate) => {
    return (value) => {
        return value + value * rate;
    }
}

const addVAT2 = addTax2(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));

*/

//Coding Challenge
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        let choice = Number(prompt(`${this.question}\n ${this.options}\n`));

        if (typeof choice === 'number' && choice < 4 && choice >= 0) {
            this.answers[choice] += 1;
        }
        else {
            alert('Please write a number between 0 to 3');
        }
        this.displayResults('array');
        this.displayResults('string');
    },

    displayResults: function (type) {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};


document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// [5,2,3]
// [1,5,3,9,6,1]

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');

*/

/*

// IIFE : executes once then never gets executed

const runOnce = function () {
    console.log(`This will never run agian`);
}

runOnce();


(function () {
    console.log(`This will never run agian`);
    const isPrivate = 23;
})();

// console.log(isPrivate); //error


(() => {
    console.log(`This will never run agian`);
})();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate); //23

// In modern js, we have let and const which are block scoped. so we do not need IIFE anymore for scoping purpose. however, still we need it if we want to use a function to be executed once. not anymore!

*/

// Closures

// it simply happens automatically, we just need to recognize those situation

// A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

// A closure gives a function acess to all the variables of its parent function,even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chai throughout time.

// A clpsure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.

//A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where function was created.

// When a variable can't be found in the function scope, js will look into the backpack and take the missing variable from there.

// We do not have to manually create closures. this is a javascript feature that happens automatically.  We can't even acess closed-over variables explicitly. A close is not a tangible js object.

/*
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

*/

// More closure examples
// let's look at some example where a function does not returning from another function to create a closure.


/*

let f;

const g = function () {
    const a = 23;

    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;

    f = function () {
        console.log(b * 2);
    }
}

g();
f(); //46

//Re-assigning f function

h(); //
f(); //  1554


//Example 2

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(() => {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);

    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(100, 3);

*/


// Coding Challenge

//Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

// And now explain to yourself (or someone around you) why this worked! Take all the time you nee. Think about when exactly the callback functions is executed, and what that means for the variables involved in this example.

// (function () {
//     const header = document.querySelector(`h1`);
//     header.style.color = 'red';
// })();

// Solution :

(function () {
    const header = document.querySelector(`h1`);
    header.style.color = 'red';

    return () => {
        document.body.addEventListener('click', () => {
            header.style.color = 'blue';
        });
    }
})()();

//or

(function () {
    const header = document.querySelector(`h1`);
    header.style.color = 'red';

    document.body.addEventListener('click', () => {
        header.style.color = 'blue';
    });

})();
