'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-05-13T14:43:26.374Z',
    '2024-05-15T18:49:59.371Z',
    '2024-05-16T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2024-05-13T14:43:26.374Z',
    '2024-05-15T18:49:59.371Z',
    '2024-05-16T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = (date) => {

    const calcDaysPassed = (date1,date2) => Math.round(Math.abs((date2-date1)/(1000*60*60*24)));

    const daysPassed = calcDaysPassed(new Date(),date);
    console.log('Days Passed : ',daysPassed);

    if(daysPassed === 0) return 'Today';
    if(daysPassed === 1) return ' Yesterday';

    if(daysPassed <=7) return `${daysPassed} days ago`;
    else {
      const day = `${date.getDate()}`.padStart(2,0);
      const month =`${date.getMonth()+1}`.padStart(2,0);
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    }
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);


    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

const now2 = new Date();
const day2 = `${now2.getDate()}`.padStart(2,0);
const month2 =`${now2.getMonth()+1}`.padStart(2,0);
const year2 = now2.getFullYear();
const hour2 = now2.getHours();
const min2 = now2.getMinutes();

labelDate.textContent = `${day2}/${month2}/${year2}, ${hour2}:${min2}`;

// day/month/year





btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); //  this method does automatic type conversion

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);


    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Converting and Checking Numbers

// In JS, all numbers are treated as floatinmg point number.
console.log(23 === 23.0); // true
// Also, Numebers are represented internally in a 64 base 2 format. that means numbers are alwasy stored in a binary format. So, basically they are only composed of zeros and ones.
// In this binary form, it's very difficult to represent some fractions that are very easy to represnt in the base 10 system that we are used to.
// Base 10 - 0 to 9
// Binary base 2 - 0,1

// there are certain numbers that are very difficult to represnt in base 2.
console.log(0.1+0.2); //0.30000000000000004 (should have been 0.3 but js has no better way to represent this number.)

// you can not do like precise scientific calculation or financial calculation in js. otherwise you would face problem like this
console.log(0.1+0.2 === 0.3); // false but should have been true

console.log(Number('23'));
console.log(+'23');


// Parsing
console.log(Number.parseInt('30px',10)); //30
console.log(Number.parseInt('e23',10)); //NaN

console.log(Number.parseInt(' 2.5rem ')); // 2
console.log(Number.parseFloat(' 2.5rem ')); //2.5

// Check if value is NaN
console.log(Number.isNaN(20));// false
console.log(Number.isNaN('20'));// true
console.log(Number.isNaN(+'20X'));// true
console.log(Number.isNaN(23/0)); // false

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23/0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23.2)); // false
console.log(Number.isInteger(23/0)); //false


// Math and Rounding
console.log(Math.sqrt(25)); //5
console.log(25 ** (1/2)); //
console.log(8 ** (1/3));

console.log(Math.max(5,18,23,11,2)); //23
console.log(Math.max(5,18,'23',11,2)); //23
console.log(Math.max(5,18,'23px',11,2)); //NaN


console.log(Math.min(5,18,23,11,2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1); // Random number between 1 to 6

const randomInt = (min,max) => Math.trunc(Math.random() * ((max-min) + 1)) + min;

console.log(randomInt(10,20));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9')); //  this method does automatic type conversion


// Difference between Math.floor() and Math.ceil()
// they are both same when dealing with positing number, but in case of neg. number they are different

console.log(Math.trunc(23.3)); // 23
console.log(Math.floor(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals

//toFixed() method alwasys return a string, not a numebr

// (2.7) is actually a number. and numebers are primitive. right?
// and primite dont't have any method. so behind the scene, js will do boxing. It transforms this number to a number object, then call the method on that object.
// and once the operation is finished it will convert it back to a primitve.
console.log((2.7).toFixed(0)); //3 (string)
console.log((2.7).toFixed(3)); // 2.700 (string)
console.log((2.345).toFixed(2)); // 2.35 (string)
console.log(+(2.345).toFixed(2)); // 2.35 (number)



///////////////////////////////////////////////////////////////////

// The Remainder Operator
console.log(5 %2);
console.log(5/2);

console.log(8%3);
console.log(8/3);

console.log(6 %2);
console.log(6/2);

console.log(7%2);
console.log(7/2);

const isEven = n => n%2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')].forEach((row,i)=>{
    //0,2,4,6
    if(i%2==0) row.style.backgroundColor = 'orangered';
    // 0,3,6,9
    if(i%3==0) row.style.backgroundColor = 'blue';
  })
})


///////////////////////////////////////////////////////////////////////////

// Numeric Seperators

const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));

///////////////////////////////////////////////////////////////////////////

// Working with BigInt

// Numbers are stored in 64 bits. there are 64 ones and zeros to represt a given number.
// Now of these 64 bits only 53 are used to actually store digits themselves.
// The rest are storing the position of the decimal point and the sign.

// The biggest number js can represt is
console.log(2** 53 -1); // -1 becaise it starts at 0 index


// Any number bigger than this can not be safely presented.

// To represent more bigger number than that, we need big integer

console.log(43543543546546757657556556567567657657676767n);
console.log(BigInt(34233434));

// Operations
console.log(10000n + 1000n);
console.log(32434334343434354545n * 435385454389328947389n);

const huge = 4783574389578349543645454545421214132449n;
const num = 23;
// console.log(huge * num); // NaN; you can not mix Big integer with normal number
console.log(huge * BigInt(num));


// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == '20'); // true

console.log(huge + ' is Really big!!!');

// Math operations are not going to work here
// console.log(Math.sqrt(16n));

// Divisions
console.log(11n/3n);
console.log(10/3);


///////////////////////////////////////////////////////////////////////////

// Creating Dates

const now = new Date();
console.log(now);

console.log(new Date('May 17 2024 16:26:42'));
console.log(new Date('December 24,2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037,10,19,15,23,5));
console.log(new Date(2037,10,31));


const future = new Date(2037,10,19,15,23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());


console.log(new Date(9116165131313)); // (miliseconds)

console.log(Date.now());
future.setFullYear();
console.log(future);



// Operations with Dates
const future2 = new Date(2037,10,19,15,23);
console.log(Number(future2));
console.log(+future2);

// const calcDaysPassed = (date1,date2) => Math.abs((date2-date1)/(1000*60*60*24));

// const days1 = calcDaysPassed(new Date(2037,3,14),new Date(2037,3,4));
// console.log(days1);