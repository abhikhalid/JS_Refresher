'use strict';

// Objects are linked to a prototype object. so each object has javascript has prototype.
// Prototypal inheritance: The prototype contains methods (behaviour) that are accessible to all objects linked to that prototype.

//  Prototype (cantains methods)
//      ^
//      |
//      |
//    Object (can access methods)

// So, basically objects inherit methods and properties from the prototype which is the reason why this mechanism is called prototypal inheritance.

// Beside prototypal inheritance, we also call this mechanism, delegation.

// In java, C++, one class was inheriting from another class. But in this case, it's basically an instance (object) inheriting from a class.


// Array.prototype.map()

// const num = [1,2,3];
// num.map(n => n *2);
// Array.prototype is the prototype of all array objects we create in javascript.
// Threfore, all arrays have access to the map method!


// Now the question is, how do we actually create prototypes? And how do we link objects to prototypes? How can we create new objects,
// without having classes?

// There are 3 ways!
// i. Constructor functions
//   👉 Technique to create objects from a function.
//   👉 This is how built-in object like Arrays, Maps or Sets are actually implemented.
//   👉 This is also how OOP is done is javascript basically since the beginning.


//ii. ES6 Classes
//   👉 Modern alternative to constructor function syntax.
//   👉 'Syntactic sugar': behind the scene, ES6 classes work exactly like constructor functions.
//   👉 ES6 classes do not behave like classes in 'classical OOP'.


//iii. Object.create()
//   👉 The easiest and most straightforward way of linking an object to a prototype object.

// i.Constructor Functions and the new operator
// *** Arrow functions will not work as a constructor function as it does not have its own this keyword. ***
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this (object will be heavy carrying this method)
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
};

const person = new Person('Khalid', 1996); // we just have created an object from constructor function!.
console.log(person);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype  --- (person.__proto__)
// 4. function automatically return {}

const person2 = new Person('Israr', 1996);
const person3 = new Person('Prianka', 1998);

console.log(person2, person3);

console.log(person instanceof Person); //true


// Prototypes
// Objects = functions
// Every object has 'prototype' property. so every function also has a property.
// Each function of js has a property called prototype (.prototype) which is also an object!

console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(new Date().getFullYear() - this.birthYear);
}

person.calcAge();
person2.calcAge();

console.log(person.__proto__);
console.log(person2.__proto__ === Person.prototype);

// Person.prototype is not actually the prototype of Person
// but instead, it is used as the prototype of all the objects

// je object hobe ami tar protype hobo!

//  Constructor function [Person()] ➡️➡️ (.prototype) ➡️➡️ Prototype ([Person.prototye])
//                                 ⬅️⬅️ (.constructor) ⬅️⬅️

// so, Person.prototype.constructor  = Person()

// If an property or method is not found in an object, javascript will look into its prototype


console.log(Person.prototype.isPrototypeOf(person));

Person.prototype.species = `Homo Sapiens`; // we can also set property
console.log(person.species);

console.log(person.hasOwnProperty('firstName')); //true
console.log(person.hasOwnProperty('species')); //false

console.log(person.__proto__);

console.log(person.__proto__.__proto__); //object

console.log(person.__proto__.__proto__.__proto__); //null (Object.__proto is the top of prototype chain)

console.dir(Person.prototype.constructor); //will point back to the Person function itself.

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__);

//Not recommended
// one of the reason, next version of js might add a method with the same name
Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());


//Every dom element is an object
//every function is an object
// arrays are object
//every object has a prototype
const h1 = document.querySelector(`h1`);
console.dir(x => x + 1);


///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed = this.speed + 10;
    console.log(this.speed);
}

Car.prototype.brake = function () {
    this.speed = this.speed - 5;
    console.log(this.speed);
}


const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1);
car1.accelerate();
car1.brake();

console.log(car2);
car2.accelerate();
car2.brake();


// ES6 Classes

// behind the scene, classes are functions in js, they internally call Constructor Function

// 1. Classes are not hoisted.
// 2. Class are first-class citizens.
// 3. Classes are executedin strict mode. if we do not acivate it. all the code in this class will be activated in strict mode


// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Instance method
    //all methods of class will be on the .prototype of the objects

    //Methods will be added to .prototype proerty

    // it will be added to the prototype property of the Person class, which once again gonna be the prototype of the objects created by that class.

    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    }

    // will be set as property on .prototype

    //Getter and Setter looks like property, but it's actually function!
    get age() {
        return new Date().getFullYear() - this.birthYear;
    }


    //set a property that already exists.
    set fullName(name) {
        console.log(name);

        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // static method
    static hey() {
        console.log(`Hey there 👋`);
        console.log(this); //here this keyword is simply PersonC1 constructor function.
    }
}

const sajib = new PersonCl('Sajib khan', 1996);
console.log(sajib);
sajib.calcAge();


console.log(`Sajib's Age : ${sajib.age}`);

console.log(sajib.__proto__ === PersonCl.prototype);

//another proof that, class really just hides the true nature of 'protypal inheritance' in javascript

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
};

sajib.greet();

const walter = new PersonCl('Walter', 1965);
console.log(walter);


PersonCl.hey();

//static method

//Array.from method converts an array like structure to a real array.
// from() method is attached to the Array constructor. not the prototype of the constructor
console.log(Array.from(document.querySelectorAll('h1')));

// PersonCl.hey = function () {
//     console.log(`Hey there`);
//     console.log(this);
// }

//  Person.hey();
// sajib.hey(); //wrong



//1. classes are not hoisted
//2. classes are first-class citizens
//3. Classes are executed in strict mode


// Setters and Getters

// Every object in javascript can have getter and setter properties.

// we call these special properties 'assessor' properties.
// while the more normal properties are called 'data' properties.

// getters and setters are basically functions that get and set a value. but on the outside they still look like regular properties.


const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);




//////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// Object.create()

const PersonProto = {
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

//Object.create() returns an empty object and sets object to it's prototype.
const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


/////////////////////////////////////////////////////



class CAR {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CAR('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);