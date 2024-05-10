// Other Promise Combinators: race, allSettled and any
// Promise.race() : just like any other comninators, receives an array of promises and it also returns a promise.

//Now this promise returned by Promise.race. Promise.race() is settled as soon as one of the input promises settles. And remember that settled simply means that a value is available, but it doesn't matter if the promise got rejected or fulfilled. And so in Promis.race, basically the first settled promise wins the race. And now here let's define an array of promises. Now, if the winning promise is then a fulfilled promise, then the fulfillment value of this whole race promise is gonna be the fulfillment value of the winning promise.Okay, so again, just keep in mind that here in Promised.race, we only get one result and not an array of the results of all the three. Now a promise that gets rejected can actually also win the race. And so we say that Promise.race short circuits whenever one of the promises gets settled. And so again, that means no matter if fulfilled or rejected.

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

            return response.json();
        });
};

(async  () => {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/bangladesh`),
        getJSON(`https://restcountries.com/v3.1/name/india`),
        getJSON(`https://restcountries.com/v3.1/name/pakistan`)
    ]);
    console.log(res);
    console.log(res[0]);
})();


// Promse.race is actually very useful to prevent never ending promises or also very long running promises.
// For example, if your user has a very bad internet connection, the a fetch reqeust in your application might take way too long
// to actually be useful. So, we can create a special time out promise, which automatically rejects after a certain time has passed.
// _ = throw away variable

const timeout = function(seconds){
    return new Promise(function(_,reject){
        setTimeout(()=>{
            reject(new Error('request took too long!'));
        },seconds*1000);
    })
};

Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/bangladesh`),
    timeout(1)
])
.then(res => console.log(res[0]))
.catch(err => console.error(err));




// Promise.allSettled (comes from ES2020)

// takes an array of promise and it will return an array of all the settled promises.
// And so agian, no matter if the promises got rejected or not.

// It's similar to Promise.all in regard that it also returns an array of all the results.
// but the difference is that, Promise.all() will short circuit as soon as one promise rejects,but promise.allSettled() simply never short circuits.

// Promise.allSettled() : it will simply return all the results of all the promises.

Promise.allSettled([
    Promise.resolve('Success'), //it creates a promise automatically and resolves
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
]).then(res => console.log(res));



Promise.all([
    Promise.resolve('Success'), //it creates a promise automatically and resolves
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
]).then(res => console.log(res))
.catch(err => console.error(err));


// Promise.any() is ES2021
// takes multiple promises and this one will then return the first fullfilled promise
// Similar to Promise.race()
// difference is rejected promises are ignored.
// so, Promsie.any() is gonna be always a fulfilled promsie. unless ofcourse all of them are reject.

Promise.any([
    Promise.resolve('Success'), //it creates a promise automatically and resolves
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
]).then(res => console.log(res))
.catch(err => console.error(err));




