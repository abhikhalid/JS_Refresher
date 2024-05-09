// The Event Loop in Practice

/*
console.log('Test start');
setTimeout(()=> { console.log('0 sec timer')},0);

// Promise.resolve() allows us to build a promise that is immediately resolved.
Promise.resolve('Resolved promise 1').then(res => console.log(res));

console.log('Test end');

// In what order do you think that these four messages that we have here, will be logged to the console?

// Answer:
    // Test start
    // Test end
    // Resolved promse 1
    // 0 sec timer

    */



/////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('Test start');
setTimeout(()=> { console.log('0 sec timer')},0);

// Promise.resolve() allows us to build a promise that is immediately resolved.
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
    // large task
    for(let i=0;i<10000000000000;i++){

    }
    console.log(res);
})


console.log('Test end');

// In what order do you think that these four messages that we have here, will be logged to the console?

// Test start
// Test end
// Resolved promise 1
// Resolved promise 2
// 0 sec timer

