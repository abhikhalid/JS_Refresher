// Other Promise Combinators: race, allSettled and any
// Promise.race() : just like any other comninators, receives an array of promises and it also returns a promise.

//Now this promise returned by Promise.race. Promise.race() is settled as soon as one of the input promises settles. And remember that settled simply means that a value is available, but it doesn't matter if the promise got rejected or fulfilled. And so in Promis.race, basically the first settled promise wins the race. And now here let's define an array of promises. Now, if the winning promise is then a fulfilled promise, then the fulfillment value of this whole race promise is gonna be the fulfillment value of the winning promise.Okay, so again, just keep in mind that here in Promised.race, we only get one result and not an array of the results of all the three. Now a promise that gets rejected can actually also win the race. And so we say that Promise.race short circuits whenever one of the promises gets settled. And so again, that means no matter if fulfilled or rejected.

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

            return response.json();
        });
}


    (async function () {
        const res = await Promise.race([
            getJSON(`https://restcountries.com/v3.1/name/bangladesh`),
            getJSON(`https://restcountries.com/v3.1/name/india`),
            getJSON(`https://restcountries.com/v3.1/name/pakistan`),
        ]);

        console.log(res[0]);
    })();