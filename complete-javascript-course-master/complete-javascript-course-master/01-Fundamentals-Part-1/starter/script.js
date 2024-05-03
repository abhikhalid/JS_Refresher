// let js = 'amazing';

// if (js === 'amazing') alert("JavaSciprt is FUN!");

// console.log(40 + 8 + 23 - 10);
// console.log("Khalid");
// console.log(23);

// let firstName = 'Khalid';
// let lastName = 'Mahmud';

// console.log(firstName);
// console.log(lastName);

// //variable name can't start with number
// //var. name should not start with Upper case letter

// //let Person = 'jonas'

// const PI = 3.1415;

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// console.log(myFirstJob);



// console.log(true);

// let JavaSciprtIsFun = true;

// console.log(JavaSciprtIsFun);

// console.log(typeof true);
// console.log(typeof JavaSciprtIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// JavaSciprtIsFun = 'YES!';

// console.log(typeof JavaSciprtIsFun);

// let year;

// console.log(year); //undefined
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof undefined); //undefined
// console.log(typeof null); //object, it's bug should have been null


// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990; //typeerror
// const job; //error

//when using const, we need an initial value

// var job = 'programmer';
// job = 'teacher';

//lastName = 'Mahmud'; //do not use this
//console.log(lastName); //still works file without declaring variable

// const now = 2037;
// const ageJonas = now - 1991;
// const ageMartha = now - 2020;

// console.log(ageJonas,ageMartha);
// console.log(ageJonas*2, ageJonas/2, 2**3);
// 2 ** 3 means 2 to the power 3 = 2 * 2 * 2
//8


// const averageAge = (ageJonas + ageMartha) / 2;
// console.log(ageJonas, ageMartha, averageAge);

// const firstName = 'Khalid';
// const lastName = 'Mahmud';

// console.log(firstName +' '+ lastName);

// let x = 10 + 5;
// x+=10;
// x+=4;
// x++;
// x--;
// x--;

// console.log(x);

// comparison operators
// console.log(ageJonas > ageMartha);
// console.log(ageMartha >=18);

// const isFullAge = ageMartha >=18;

// console.log(now - 1991 > now - 2018);

// let a,b;
// a = b = 25-10-5;
// console.log(a,b);


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (
//   year - birthYear
// ) + ' years old ' + job + '!';

// const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old
// ${job}`;

// console.log(jonas);
// console.log(jonasNew);

// console.log(`just a regular string...`);
// console.log(`String with \n
// multiple\n\nlines`);

// console.log(`String
// multiple
// lines`);

// const age = 19;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log(`Sarah can start driving licence 🚗`);
// }else{
//     const yearsLeft = 18 - age;

//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;

// let century;

// if(birthYear <=2000){
//     century = 20;
// }else{
//     century = 21;
// }

// console.log(century);

// const inputYear = '1991';

// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); //nan
// console.log(typeof NaN); //number but invalid number
// console.log(String(23),23);

// //type coerction
// console.log('I am '+23 +' years old');
// console.log('I am '+ String(23)+ ' years old');// behind the scene

// console.log('23' - '10' - 3); //10 !!

// -,*,/ operator converts string to number
// + operator converst number to string

// console.log('23' * '2');

// //guess game

// let n = '1' + 1;
// n = n - 1;
// console.log(n); //10

// console.log(2+3+4+'5'); //95
// console.log('10'-'4'-'3'-2+'5'); //15


//Truthy and Falsy values

//Falsy values are values which are not actually false when we try to convert them to boolean

//5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('John'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;

// if(money) // 0 will automatically converted to boolean
// {
//     console.log("Don't spend it all!");
// }
// else{
//     console.log("You should get a job!");
// }

// let height;

// if(height){
//     console.log("YAY! Height is defined!");
// }else{
//     console.log("Height is UNDEFINED!");
// }

//Equality Operator: == vs ===

// const age = 18;

// if(age===18) console.log("You just became an adult");

// if(age==18) console.log("You just became an adult");

// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23){
//     console.log('Cool! 23 is an amazing number!');
// }
// else if(favourite === 7){
//     console.log('7 is aso a cool number');
// }
// else if(favourite === 9){
//     console.log('9 is aso a cool number');
// }else{
//     console.log('Number is not 23 or 7');
// }


// if(favourite!=23) console.log('why not 23?');







// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log('Sarah is able to drive!');
// }else{
//     console.log('Someone else should drive...');
// }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Sarah is able to drive!');
// }else{
//     console.log('Someone else should drive...');
// }



///switch case

// const day = 'monday';

// switch(day){
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;

//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;

//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;

//     case 'friday':
//         console.log('Record videos');
//         break;

//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;

//     default:
//         console.log('Not a valid day!');

// }


// if(day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }else if(day === 'tuesday'){
//     console.log('Prepare theory videos');
// }else if(day === 'wednesday' || day=== 'thursday'){
//     console.log('Write code examples');
// }else if(day==='friday'){
//     console.log('Record Videos');
// }else if(day==='saturday' || day=== 'sunday'){
//     console.log('Enjoy the weekend :D');
// }



//Ternary Operator

const age = 23;

// age>=18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 💦');


const drink = age >=18 ? 'wine 🍷' : 'water 💧';

console.log(drink);

let drink2;

if(age>=18){
    drink2 = 'wine 🍷';
}else{
    drink2 = 'water 💧';
}

console.log(drink2);

console.log(`I like to drink ${age>=18 ? 'wine 🍷' : 'water 💧'}`);
