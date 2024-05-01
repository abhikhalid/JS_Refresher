'use strict';

'use strict';

// Constructor Functions and the new operator

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
};

const person = new Person('Khalid', 1996);
console.log(person);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const person2 = new Person('Israr', 1996);
const person3 = new Person('Prianka', 1998);

console.log(person2, person3);

console.log(person instanceof Person); //true


// Prototypes
// Each function of js has a property called prototype
Person.prototype.calcAge = function () {
    console.log(new Date().getFullYear() - this.birthYear);
}

person.calcAge();
person2.calcAge();

console.log(person.__proto__);
console.log(person2.__proto__ === Person.prototype);

// Person.prototype is not actually the prototype of person
// but instead, it is used as the prototype of all the objects

console.log(Person.prototype.isPrototypeOf(person));

Person.prototype.species = `Homo Sapiens`;
console.log(person.species);

console.log(person.hasOwnProperty('firstName')); //true
console.log(person.hasOwnProperty('species')); //false

console.log(person.__proto__);

console.log(person.__proto__.__proto__); //object

console.log(person.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//Not recommended
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
    get age() {
        console.log(new Date().getFullYear() - this.birthYear);
    }

    set fullName(name) {
        console.log(name);

        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {


        return this._fullName;
    }


    get fullName() {
        return this._fullName;
    }

    // static method
    static hey() {
        console.log(`Hey there`);
    }
}

const sajib = new PersonCl('Sajib khan', 1996);
console.log(sajib);
sajib.calcAge();

console.log(sajib.__proto__ === PersonCl.prototype);

//another proof that, class really just hides the true nature of 'protypal inheritance' in javascript

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
};

sajib.greet();

const walter = new PersonCl('Walter White', 1965);



console.log(walter);

PersonCl.hey();

//static method

// PersonCl.hey = function () {
//     console.log(`Hey there`);
//     console.log(this);
// }

// Person.hey();
// sajib.hey(); //wrong


//1. classes are not hoisted
//2. classes are first-class citizens
//3. Classes are executed in strict mode