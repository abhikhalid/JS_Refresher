//https://www.keka.com/javascript-coding-interview-questions-and-answers

// 1. Write a JavaScript function to calculate the sum of two numbers.

const sum = (a, b) => a + b;

//2. Write a JavaScript program to find the maximum number in an array.

const maximum = (arr) => arr.reduce((acc, curr) => {
    (curr > acc) ? acc = curr : acc;
}, arr[0]);

//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

const checkPalindrome = (str) => str === str.split('').reverse().join('');

//4. Write a JavaScript program to reverse a given string.

const reverseString = (str) => str.slit('').reverse().join('');

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers

const evenNumbers = (arr) => arr.filter(num => num % 2 == 0);


// 6. Write a JavaScript program to calculate the factorial of a given number.

const factorial = (num) => {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

//7. Write a JavaScript function to check if a given number is prime.

const isPrime = (num) => {
    if (num < 2) return false;

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

//8. Write a JavaScript program to find the largest element in a nested array.

const findLargest = (arr) => {
    let array = arr.flat();

}

//9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

const fib = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let sequence = [0, 1];
}

//10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

const capitalizeWord = (str) => str.split('').map(word => word[0].toUpperCase() + word.slice(1)).join('');


//Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

const mergeArr = (arr1, arr2) => {
    const mergeArr = [];

    let i = 0, j = 0, k = 0, length = Math.min(arr1.length, arr2.length);

    while (k < length) {
        if (arr1[i] < arr2[j]) {
            mergeArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            mergeArr.push(arr2[j]);
            j++;
        } else {
            mergeArr.push(arr1[i]);
            i++;
            j++;
        }
        k++;
    }

    while (i < arr1.length) {
        mergeArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergeArr.push(arr2[j]);
        j++;
    }

    return mergeArr;
}



//Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case

const isPalindrome = (str) => str === str.split('').reverse().join('');


// Write a function that determines if two strings are anagrams of each other

const isAnagram = (str1, str2) => {
    //base case
    if (str1.length != str2.length) return false;

    let obj1 = {}, obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        if (!obj1[str1[i]]) {
            obj1[str1[i]] = 1;
        } else {
            obj1[str1[i]] += 1;
        }
    }

    for (let j = 0; j < str2.length; j++) {
        if (!obj2[str2[j]]) {
            obj2[str2[j]] = 1;
        } else {
            obj2[str2[j]] += 1;
        }
    }

    for (key in obj1) {
        if (!obj2[key] || obj1[key] != obj2[key]) return false;
    }

    return true;
}


//Implement a function to reverse a string without using the built-in reverse() method.

const reverseString2 = (str) => {
    let revStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

//  Given an array of numbers, write a function to find the largest and smallest numbers in the array.

const findLargestAndSmallest = (arr) => {
    arr.sort((a, b) => a - b);

    return [arr[arr.length - 1], arr[0]];
}


//Write a function that takes an array of integers as input and returns a new array with only the unique elements.

const uniqueNumbers = (arr) => {
    return [...new Set(arr)];
}

//Implement a function to find the factorial of a given number.

const fact = (num) => {
    //base case
    if (num === 1) return num;

    return num * fact(num - 1);
}

//Given a string, write a function to count the occurrences of each character in the string.

const countOccurence = (str) => {
    let obj = {};

    str.split('').forEach(ch => {
        if (!obj[ch]) {
            obj[ch] = 1;
        } else {
            obj[ch] += 1;
        }
    });

    for (key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}


//. Write a function that sorts an array of numbers in ascending order.

const sortArr = (arr) => arr.sort((a, b) => a - b);


// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

const largestDifference = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0];
}


// Implement a function that removes duplicates from an array, keeping only the unique elements.

const removeDup = (arr) => {
    return [...new Set(arr)];
}


//Implement a function that finds the 'second smallest' element in an array of integers.

const secondSmallest = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[1];
}


// Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.

const findIndex = (arr, val) => {
    return (arr.indexOf(val) === -1) ? -1 : arr.indexOf(val);
}
