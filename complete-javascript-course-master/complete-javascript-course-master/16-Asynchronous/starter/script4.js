// Building a Simple Promise

// Promises are special kind of object in javascript.

/*
const lotteryPromise = new Promise(function(resolve,reject){
    if(Math.random() >=0.5){
        resolve('You Win!');
    }else{
        reject('You loset your money');
    }
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
*/

const lotteryPromise = new Promise(function(resolve,reject){
    console.log('Lottery draw is happening');

    setTimeout(()=>{
        if(Math.random() >=0.5){
            resolve('You Win!');
        }else{
            reject(new Error('You lost your money!'));
        }
    },2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));


// Promisifying setTimeout
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds * 1000); //not passing any resolved value into the resolve function, because it's not mandatory.
    });
}

wait(2) // this will create a promsise that will wait for 2 seconds and after these 2 seconds, it will resolve
.then(()=>{
     //here in this callback function, we could run any code that we wanted to be executed after two seconds.
     console.log('I waited for 2 seconds');
     return wait(1); // this is exactly like two sequential AJAX call using the fetch function, in the result of first fetch, we would create new fetch and return it.
}).then(() => console.log(`I waited for 1 second`)); //chian of asynchronous behaviour (and all without callback hell)



wait(2)
.then(()=>{
     console.log('1 second passed');
     return wait(1);
})
.then(() => {
    console.log('2 second passed');
    return wait(1);
})
.then(() => {
    console.log('3 second passed');
    return wait(1);
})
.then(() => console.log('4 second passed'));


// callback hell

// setTimeout(()=>{
//     console.log('1 second passed');
//     setTimeout(()=>{
//         console.log('2 second passed');
//         setTimeout(()=>{
//             console.log('3 second passed');
//             setTimeout(()=>{
//                 console.log('4 second passed');
//             },1000);
//         },1000);
//     },1000);
// },1000);



//Promise.resolve() is a static method of Promise constructor
// it resolved immediately

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));
