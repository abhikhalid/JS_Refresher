/*

// Inheritance Between 'Classes' : Constructor Functions

const Person = function (firstName, birthYear) {
    this.firstName = firstFirst;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

*/

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype); // Linking prototypes
// not this,
// Student.prototype = Person.prototype

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);



///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function (speed) {
    this.speed += speed;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function (brake) {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

// run-time polymorphism
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();





// Inheritance Between 'Classes' : ES6 Classes


class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    }

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

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a studetn I feel more like ${2037 - this.birthYear + 10}`)
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// Inheritance that we explored here can be very problematic and dangerous in the real world when we are designing software. We will learn more about it when we learn functional programming. which is kind of alternative of object oriented programming.


// Inheritance Between Classes : Object.create (object chaining)
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


// Another Class Example

/*
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    deposit(val) {
        this.movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

//not a good idea to manipulate movement directly like this
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(); // In the real world, we also shouldn't access this method. right?
console.log(acc1);


console.log(acc1.pin); //currently we are accessing pin directly which should be done. right?

// So basically we really need data encapsulation and data privacy.

*/

///////////////////////////////////////////////////

// Encapsulation: Protected Properties and Methods

// Encapsulations basically means to keep some properties and methods private inside the class, so they are not accessible from outside of the class. Then rest of the methods are basically exposed as a public interface, which we can call API.

// There are Two Big Reasons why need encapsulation and data privacy. So, first it is to prevent code from outside of a class to accidentally manipulate or data inside the class. Second reason is our code will not break. However javascript classes actually do not yet support real data privacy and encapsulation. Now there si a proposal to add truly private class fields and methods to the language. but it's not completely ready yet! So, we will fake encapsulation. :( 

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        //protected field
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);

    }

    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

//not a good idea to manipulate movement directly like this
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(); // In the real world, we also shouldn't access this method. right?
console.log(acc1);


console.log(acc1.pin);

acc1._movements.push(200); //still accessible, but at least you and your team know that it should not be accessible by seeing _ before var. name. it's just a convention.

console.log(acc1.getMovements());

// Developers need to know this convention otherwise everything is public.

///////////////////////////////////////////

// Encapsulation Private Class Fields and Methods

// Alright, so let's now implement truly private class fields and methods. So private class fields and methods are actually part of a bigger proposal
// for improving and changing JavaScript classes which is simply called Class fields. Now this Class fields proposal is currently at stage three.
// And so right now it's actually not yet part of the JavaScript language. However, being at stage three means that it's very likely that at some point,
// it will move forward to stage number four. And then it will actually become a part of the JavaScript language. And that's probably gonna happen
// some point soon in the future, And that's why I decided to already include class fields in this course. And in fact, some parts of this proposal
// actually already work in Google Chrome, but other parts don't. At least not at the time of recording this video. Now for starters, why is this proposal
// actually called Class fields? Well, in traditional OOP languages like Java and C++, properties are usually called fields. So what this means is that
// with this new proposal, JavaScript is moving away from the idea that classes are just syntactic sugar over constructor functions. Because with
// this new class features classes actually start to have abilitiesthat we didn't previously have with constructor functions.


// 1. Public fields
// 2. Private fields
// 3. Public Methods
// 4. Private Methods

class Account2 {

    // 1. Public fields
    // (these are set on the instances)
    locale = navigator.language;

    // 2. Private fields (just put # before var.name)
    #movements = [];
    #pin; //class field are just like any other proeprty. that's why we can acess it with this keyword.

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface
    // these methods are set on the prototype property.
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }



    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
        return this;
    }

    // 4) Private Methods
    //right now, it's not supported is not supported by any browser. 😢😭
    #approveLoan(val) {
        return true;
    }
}

const acc2 = new Account2('Ulrich', 'EUR', 1111);


acc2.deposit(250);
acc2.withdraw(140);
acc2.requestLoan(1000);
console.log(acc2.getMovements());
// console.log(acc1);

// let's now try to access private field
// console.log(acc2.#movements); //error


// Chaining Methods
acc2.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc2.getMovements());


/////////////////////////////////////////////

// Coding Challenge #4
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
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
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl {

    #charge; //private property

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        CarCl.prototype.accelerate.call(this);
        this.#charge--;
        console.log(`, with a charge of ${this.#charge}%`);
        
        return this;
    }

    chargeBattery(charge) {
        this.#charge = charge;
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().brake().chargeBattery(100);

console.log(rivian);