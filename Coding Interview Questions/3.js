//https://www.linkedin.com/pulse/top-javascript-coding-interview-questions/

// 1. Write a code to display which character is coming how many times in a given string ?

const countFrequency = (str) => {
    let obj = {};

    str.split('').forEach(ch => {
        if (!obj.ch) {
            obj[ch] = 1;
        } else {
            obj[ch] += 1;
        }
    });

    for (key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

//3. Given an array containing some numbers write a code to that will find out the missing number in the array’s range ?

const findMissingNumber = (arr) => {
    let n = arr[arr.length - 1];
    let totalSum = (n * (n + 1)) / 2;

    return totalSum - arr.reduce((acc, curr) => acc + curr, 0);
}

//4. Write a code to reverse all the words of a given string. For example : Input : “how are uoy” Output : “Woh era you”

const reverseWord = (str) => {
    return str.split('').reverse().join(' ');
}


//5. How to segregate 0s and 1s in an array in Javascript ?

const segerate0sAnd1s = (arr) => {
    let count0 = 0, j = 0;

    for (let i = 0; i < arr.length; i++) {
        count0 += 1;
    }

    while (j < count0) {
        arr[j] = 0;
        j++;
    }
    while (j < arr.length - count0) {
        arr[j] = 1;
        j++;
    }
    return arr;
}

//6. Write a function to check if an anagram of a string is palindrome or not ?

const isAnagram = (str) => {
    let obj = {};
    let oddCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) obj[str[i]] = 1;
        else obj[str[i]] += 1;
    }

    for (key in obj) {
        if (obj[key] % 2 != 0) oddCount++;
    }

    if (str.length % 2 == 0 && oddCount === 0) return true;
    else if (str.length % 2 !== 0 && oddCount === 1) return true;
    else return false;

}


//8. Write a code to group items of array by category ?




//9. How to get the maximum count of consecutive 1’s in an array ?

const maxCount1 = (arr) => {
    let totalSum = 0;
    let currSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currSum++;
            if (currSum > totalSum) totalSum = currSum;
        } else {
            currSum = 0;
        }
    }
    return totalSum;
}



//11. Given an integer array, find the subarray with the largest sum, and return its sum ?

const largestSum = (arr) => {
    let maxSum = 0, currSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (currSum > maxSum) maxSum = currSum;
    }
}


//14. How to reverse a string in JavaScript using recursion ?

const reverseString = (str) => {

    //base case
    if (str.length == 1) return str[0];

    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}


//15. Write a function to get following output from given input: