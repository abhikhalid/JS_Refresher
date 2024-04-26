'use strict';

// Default Parameters

// const bookings = [];

// const createBooking = (
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassenger
// ) => {
//     //ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',2);
// createBooking('LH123',5);

// createBooking('LH123',undefined,1000); //undefined means using default parameter



// How Passing Arguments Works : Value vs Reference

const flight = 'LH234';
const person = {
    name: 'Khalid Mahmud',
    passport: 3423434324
}

const checkIn = (flightNum,passenger) =>{
    flightNum = 'LH999';
    passenger.name = 'Md. ' + passenger.name;

    if(passenger.passport === 3423434324){
        alert('Checked in');
    }else{
        alert('Wrong passport!');
    }
}

checkIn(flight,person);

console.log(flight);
console.log(person);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()) * 1000000;
}

newPassport(person);
checkIn(flight,person);

//JS does not have pass by reference like C++ or other language.
// It only has call by value.
// even it looks like we pass by reference by passing the object to a function
// but it is not! still we are passing the memory address of the object which is a value