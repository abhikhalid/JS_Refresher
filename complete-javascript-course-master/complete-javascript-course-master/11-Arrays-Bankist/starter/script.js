'use strict';

/////////////////////////////////////////////////

/*

let arr = ['a', 'b', 'c', 'd', 'e'];


//SLICE

console.log(arr.slice(2)); //starting at position no 2
console.log(arr.slice(2, 4)); //starting 2, ending at 3
console.log(arr.slice(-2)); // last 2 elements at the array
console.log(arr.slice(-1)); // last element
console.log(arr.slice(1, -2)) // second element + skips last 2 element
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.slice(2));
arr.splice(-1);
console.log(arr);

arr.slice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

*/

// The new 'at()' method
/*
const arr = [23, 11, , 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log(`khalid`.at(0));
console.log(`khalid`.at(-1));
*/

// Looping Arrays: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// For Loop
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdraw ${Math.abs(movement)}`);
  }
}

//ForEach Loop
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdraw ${Math.abs(movement)}`);
  }
});
*/

// Continue and Break statement do not work with foreach loop

// ForEach with Map and Set

//Map
/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
});


//Set
const currenciesUnique = new Set([
  'USD', 'GBP', 'USD', 'EUR', 'EUR'
]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});


*/




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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


const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ' ';

  const movs = sort ? movements.slice().sort((a, b) => {
    return a - b;
  }) : movements;

  movs.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov} 💲</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// displayMovements(account1.movements);

const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((accumulator, curr) => accumulator + curr, 0);

  console.log(acc.balance);

  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = (acc) => {
  const incomes = acc.movements.filter(move => move > 0)
    .reduce((acc, current, arr) => {
      return acc + current
    }, 0);

  const outgoing = acc.movements.filter(move => move < 0)
    .reduce((acc, curr, arr) => {
      return acc + Math.abs(curr);
    }, 0);

  labelSumIn.textContent = `${incomes}💲`;
  labelSumOut.textContent = `${outgoing}💲`;

  const interest = acc.movements.filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((interest, i, arr) => interest >= 1)
    .reduce((acc, current) => acc + current, 0);

  labelSumInterest.textContent = `${interest}💲`;

}

// calcDisplaySummary(account1.movements);



const createUserNames = (accounts) => {
  accounts.forEach(acc => {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
}

createUserNames(accounts);
console.log(accounts);


const updateUI = (currentAccount) => {
  // Display movements
  displayMovements(currentAccount.movements);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
}

//Event handler

let currentAccount;

btnLogin.addEventListener('click', (e) => {
  console.log('Login');
  e.preventDefault(); //prevent this form from submitting

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`LOGIN`);

    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  console.log(amount, receiverAcc);

  if (amount > 0
    && currentAccount.balance >= amount
    && receiverAcc?.username !== currentAccount.username) {
    console.log(`Transfer valid!`);

    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UO
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }

});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');

  if (inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    console.log(index);

    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }

});

let sorted = false;

btnSort.addEventListener('click', (e) => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});






// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



// CODING CHALLENGE

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const checkDogs = (dogsJulia, dogsKate) => {

  let correctedDogJulia = dogsJulia.slice(1, -2);
  // console.log(correctedDogJulia.length);

  let arr = correctedDogJulia.concat(dogsKate);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3) {
      console.log(`Dog number ${ i + 1 } is an adult and is ${ arr[i] } years old`);
    } else if (arr[i] < 3) {
      console.log(`Dog number ${ i + 1 } is still a puppy 🐶`);
    }
  }
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

*/

// The Map method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => {
  mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}

console.log(movementsUSDfor);


const movementsDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${ i + 1 } : You deposited ${ mov } `;
  } else {
    return `Movement ${ i + 1 } : You withdraw ${ Math.abs(mov) } `;
  }
})

console.log(movementsDescription);

*/

// The filter method

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);
const withdraws = movements.filter(mov => mov < 0);

console.log(deposits);
console.log(withdraws);


// The Reduce Method
const balance = movements.reduce((accumulator, current, arr) => {
  return accumulator + current;
}, 0);

console.log(balance);

// Maximum value
const maximum = movements.reduce((accumulator, current, arr) => {
  if (accumulator > current) return accumulator;
  else return current;
}, movements[0]);

console.log(maximum);

*/

///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const calcAverageHumanAg = (ages) => {
  //converting dog age to human age
  ages.forEach((age, index) => {
    if (age <= 2) {
      ages[index] = 2 * age;
    } else {
      ages[index] = 16 + (age * 4);
    }
  });

  let excludedDogAge = ages.filter(age => age >= 18);
  console.log(excludedDogAge);

  let avgAgeOfDogs = excludedDogAge.reduce((acc, current) => acc + current, 0) / excludedDogAge.length;

  console.log(avgAgeOfDogs);
}

calcAverageHumanAg([5, 2, 4, 1, 15, 8, 3]);

*/

///////////////////////////////////////
// The Magic of Chaining Methods

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements.filter(move => move > 0)
  .map(move => move * eurToUsd)
  .reduce((accumulator, current, arr) => {
    return accumulator + current;
  }, 0);

console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = (dogAges) => {
  const avgDogAge = dogAges.map(age => {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + (age * 4);
    }
  }).filter(age => age >= 18)
    .reduce((accumulator, age, index, arr) => {
      return accumulator + age / arr.length
    }
      , 0);

  return avgDogAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

*/

// The find method
//returns the first matching value if exists
/*
const firstWithdrawal = movements.find(move => move < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);


const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);
*/

// Some and every
/*
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//every : if every elements passes the test only then it returns true

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate Callback

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

*/

/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, curr, index, arr) => {
  return acc += curr;
}, 0);

console.log(overalBalance);

//or use method chaining

//flat
const overalBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);

console.log(overalBalance2);

//flatMap

const overalBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);

console.log(overalBalance3);

*/

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log(owners);

//Numbers
console.log(movements);
console.log(movements.sort());


// return < 0, A, B
// return > 0, B, A
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(movements);

//ascending
movements.sort((a, b) => a - b);

console.log(movements);

//descending
movements.sort((a, b) => b - a);

console.log(movements);


movements.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
})

console.log(movements);


// More Ways of Creating and Filling Arrays

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

x.fill(1);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

// Array from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);


// console.log(movementsUI);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll(`.movements__value`),
    el => Number(el.textContent.replace('💲', '')));

  console.log(movementsUI);

});

// Array Methods Practice

//1.
const bankDepositSum = accounts.flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.

// const numDeposits100 = accounts.flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits100 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => (curr >= 1000 ? acc + 1 : acc), 0);

console.log(numDeposits100);

//3.

const sums = accounts.flatMap(acc => acc.movements)
  .reduce((acc, curr) => {
    (curr > 0) ? acc.deposits += curr : acc.withdrawls += curr;

    return acc;

  }, { deposits: 0, withdrawls: 0 });

console.log(sums);

// 4. this is a nice title -> This Is a Nice Title

const convertTitleCase = (title) => {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase().split(' ')
    .map(word => {
      if (!exceptions.includes(word)) {
        word = word[0].toUpperCase() + word.slice(1);
        return word;
      } else return word;
    }).join(' ');

  console.log(titleCase);
}

convertTitleCase('This Is a Nice Title');