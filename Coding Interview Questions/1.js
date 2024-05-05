//https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-1-a0e5bb606eaf

// Question 1 :  Can you write a function in JavaScript to reverse the order of words in a given string?
/*
const reverseWord = (str) => {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWord('I am khalid'));

*/

//Question 2: Can you write a function in JavaScript to remove duplicate elements from an array?
/*

const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3]));

*/

//Question 3: Can you write a function in JavaScript to merge two objects without overwriting existing properties?

/*
const mergeObject = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
};

*/

//Question 5: Can you write a function in JavaScript to calculate the cumulative sum of an array?

const calcSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(calcSum([1, 2, 3]));

//Question 6: Can you write a function in JavaScript to split an array into chunks of a specified size?

//Question 10: Can you write a line of code in JavaScript to swap the values of two variables without using a temporary variable?

let a = 10, b = 2;
[b, a] = [a, b];