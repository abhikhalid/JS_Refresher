// 'use strict';

// // let hasDriversLicense = false;
// // const passTest = true;

// // if(passTest) hasDriverLicense = true;

// // if(hasDriversLicense) console.log('I can Drive :D');


// //functions

// // function logger(){
// //     console.log('My name is Khalid');
// // }

// // calling/running/invoking function
// // logger();
// // logger();
// // logger();


// // function Blender(apples,oranges){
// //     console.log(apples,oranges);

// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

// //     return juice;
// // }

// // console.log(Blender(5,10));


// // Function declaration vs Funtion Expression


// //Function Declaration

// // const age1 = calcAge1(1991);

// // function calcAge1(birthYear){
// //     return 2037 - birthYear;
// // }

// //Function Expression

// // const calcAge2 = function (birthYear){
// //     return 2037 - birthYear;
// // }

// // const age2 = calcAge2(1993);

// // console.log(age1,age2);

// // Arrow functions

// // const calcAge3 = birthYear = 2037 - birthYear;

// // const age3 = calcAge3(1991);

// // const yearsUntilRetirement = (birthYear,firstName) => {
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;

// //     return `${firstName} retires in ${retirement} years`;
// // }

// // console.log(yearsUntilRetirement(1991,'Jonas'));
// // console.log(yearsUntilRetirement(1980,'Bob'));



// //Function calling other functions

// // function cutFruitPiece(fruit){
// //     return fruit * 4;
// // }

// // function fruitProcessor(apples,oranges){
// //     const applePieces = cutFruitPiece(apples);
// //     const orangePieces = cutFruitPiece(oranges);

// //     const juice =  `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;

// //     return juice;
// // }

// // console.log(fruitProcessor(2,3));


// // Reviewing Functions

// // const calcAge = function(birthYear){
// //     return 2037 - birthYear;
// // }

// // const yearsUntilRetirement = function (birthYear,firstName){
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     return `${firstName} retures in ${retirement>0 ? retirement : -1} years`;
// // }

// // console.log(yearsUntilRetirement(1991,'Jonas'));
// // console.log(yearsUntilRetirement(1970,'Mike'));



// //Introduction to Arrays


// // const friend1 = 'Michael';
// // const friend2 = 'Steven';
// // const friend3 = 'Peter';

// // const friends = ['Michael','Steven','Peter'];

// // console.log(friends);

// // const years = new Array(1991,1984,2008,2020);

// // console.log(friends[0]);
// // console.log(friends[2]);

// // console.log(friends.length);

// // console.log(friends[friends.length-1]);

// // friends[2] = 'Jay';
// // console.log(friends);

// // const firstName = 'Jonas';
// // const jonas = [firstName,'Khalid',2037-1991,'teacher',friends];

// // console.log(jonas);
// // console.log(jonas.length);

// // // Exercise
// // const calcAge = function(birthYear){
// //     return 2037 - birthYear;
// // }

// // const years2 = [1990,1967,2002,2010,2018];

// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[years.length - 1]);


// // console.log(age1, age2, age3);

// // const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// // console.log(ages);


// // Basic Array Operations

// // const friends = ['Michael','Steven','Peter'];

// // friends.push('Jay');

// // console.log(friends);

// // friends.unshift('John');
// // console.log(friends);

// // //Remove elements
// // const popped = friends.pop(); // last; return last removed element

// // console.log(popped);
// // console.log(friends);

// // friends.unshift(); //remove first element
// // console.log(friends);

// // console.log(friends.indexOf('Steven'));
// // console.log(friends.indexOf('Bob'));

// // friends.push(23);

// // console.log(friends.includes('Steven'));
// // console.log(friends.includes('Bob'));
// // console.log(friends.includes('23')); //false

// // if(friends.includes('Peter')){
// //     console.log('You have a friend called Peter');
// // }



// // Introduction to Objects

// // const jonasArray = [
// //     'Khalid',
// //     'Mahmud',
// //     2037-1991,
// //     'teacher',
// //     ['Michael','Peter','Steven']
// // ];

// // const jonas =  {
// //     firstName: 'Khalid',
// //     lastName: 'Mahmud',
// //     age: 2024-1996,
// //     job: 'Software Engineer',
// //     friends: ['Michael','Peter','Steven']
// // };

// // console.log(jonas);
// // console.log(jonas.firstName);
// // console.log(jonas['lastName']);

// // const nameKey = 'Name';

// // console.log(jonas['first' + nameKey]);
// // console.log(jonas['last' + nameKey]);


// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, LastName, age, job and friends?');

// // console.log(interestedIn);

// //wrong
// // console.log(jonas.interestedIn);

// // console.log(jonas[interestedIn]);

// // if(jonas[interestedIn]){
// //     console.log(jonas[interestedIn]);
// // }else{
// //     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// // }

// // jonas.location = 'Dhaka';
// // jonas['twitter'] = '@jonas234';

// // console.log(jonas);

// //Challenge
// // Khalid has 3 friends and his best friend is called Micael

// // console.log(jonas.firstName);
// // console.log(jonas.friends.length);
// // console.log(jonas.friends[0]);



// //Object Methods

// const jonas =  {
//     firstName: 'Khalid',
//     lastName: 'Mahmud',
//     birhtYear: 1996,
//     job: 'Software Engineer',
//     friends: ['Michael','Peter','Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function(){
//     //     console.log(this);

//     //     return 2037 - this.birhtYear;
//     // }

//     calcAge: function(){
//         console.log(this);
//         this.age = 2037 - this.birhtYear;
//         return this.age;
//     },

//     getSummary: function(){
//         console.log(`${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense? 'a ':'no'}driver's license`);
//     }
// };

// // console.log(jonas.calcAge(1991));
// // console.log(jonas['calcAge'](1991));

// // console.log(jonas.calcAge());

// console.log(jonas.age);

// console.log(jonas.getSummary());

// //Challenge
// // "jonas is a 46 years old teacher."

// //Arrays are actually object so it has method like push, pop, shift, unshift etc



// // Iteration : The For Loop


// for(let i=1; i<=10;i++){
//     console.log(`Alhamdulillah, I am Muslim ${i}`);
// }



// Looping Arrays: Breaking and Continuing

// const types = [];


// const arr = [
//     'Khalid',
//     'Mahmud',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven']
// ];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i], typeof arr[i]);

//     // types[i] = typeof arr[i];
//     types.push(typeof arr[i]);
// }

// console.log(types);

// const years = [1991,2007,1969,2020];
// const ages = [];

// for(let i=0;i<years.length;i++){
//     ages.push(new Date().getFullYear() - years[i]);
// }

// console.log(ages);

// // continue and break
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i] !== 'string') continue;

//     console.log(arr[i],typeof arr[i]);
// }


// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i] !== 'number') break;

//     console.log(arr[i],typeof arr[i]);
// }


// Looping Backwards and Loops in Loops

// const arr = [
//     'Khalid',
//     'Mahmud',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven']
// ];


// for(let i=arr.length-1; i>=0;i--){
//     console.log(i,arr[i]);
// }


// for(let exercise=1; exercise<4;exercise++){
//     console.log(`--- Starting exercise ${exercise} ---`);

//     for(let rep=1;rep<6;rep++){
//         console.log(`Lifting ${exercise} weight repetition ${rep}`);
//     }

// }


// While Loop

let rep = 1;

while(rep <=10){
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !==6){
    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;

    if(dice===6) console.log(`Loop is about to end...`);

}