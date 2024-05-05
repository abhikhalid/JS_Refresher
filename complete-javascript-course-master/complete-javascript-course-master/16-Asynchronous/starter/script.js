'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

///https://countries-api-836d.onrender.com/countries/

// Our first AJAX Call : XMLHttpRequest

/*
const getCountryData = (country) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    console.log(request.responseText);

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = ` <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.ben}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0].name}</p>
    </div>
  </article>`;

        countriesContainer.insertAdjacentHTML('beforeend', html);

        countriesContainer.style.opacity = 1;

    });
}

getCountryData('Bangladesh');
getCountryData('Indonesia');
getCountryData('Germany');

*/






// Welcome to Callback Hell

// Callback Hell: When we have lot of nested callbacks in order to execute asynchronous task in sequence

/*

const renderCountry = (data, className = '') => {
    const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.ben}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0].name}</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = (country) => {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    console.log(request.responseText);

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render Country 1
        renderCountry(data);

        //Get neighbour country
        const neightbour = data.borders?.[0];

        if (!neightbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neightbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });

    });
}

getCountryAndNeighbour('usa');

setTimeout(() => {
    console.log(`1 second passed`);
    setTimeout(() => {
        console.log(`2 second passed`);
        setTimeout(() => {
            console.log(`3 second passed`);
            setTimeout(() => {
                console.log(`4 second passed`);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// There is a actually a way of escaping callback hell by using something called promises.

*/

// Promises and the Fetch API

// Promise : An object is used as a placeholder for the future result of an asynchronous operation.

// Less formal def.
// Promise: A container for an asynchronously delivered value.

// More less formal def.
// Promise : A container for future value.

// We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results. Events and callback functions can some time cause unpredictable resutls.


// Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations. escaping callback hell

// then() method always return a promise whether we return a promise or not.


// Promises are introduces in 2015 (ES5)

// Promises do not get rid of callbacks, instead they get rid of callback hell.


// then() method is called when the promise is full-filled.
// catch() method is called when the promise is rejected.
// finally() method always executes. always need to happen.






// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// Consuming Promises

/*
const renderCountry = (data, className = '') => {
    const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.ben}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0].name}</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}


const request = fetch(`https://restcountries.com/v3.1/name/Bangladesh`); //fetch return a promise object

console.log(request);

const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json(),
            err => alert(err)) //handling rejected promises
        // then method will return another promise object
        .then(data => {
            console.log(data);
            renderCountry(data[0]);

            const neighbour = data[0].borders?.[0];
            console.log(neighbour);

            if (!neighbour) return;

            // Country 2 (Chaining Promise)
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

        })
        .then(response => response.json(),
            err => alert(err))  //handling rejected promises
        .then(data => {
            console.log(data[0]);
            renderCountry(data[0], 'neighbour')
        });
}

btn.addEventListener('click', function () {
    getCountryData('USA');
});

*/
// getCountryData('Indonesia');



// Better way of handling rejected promises
const renderCountry = (data, className = '') => {
    const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.ben}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0].name}</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}


const request = fetch(`https://restcountries.com/v3.1/name/Bangladesh`); //fetch return a promise object

console.log(request);


const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            console.log(response);

            if (!response.ok) //if it's true then it's gonnna be rejected promise
                throw new Error(`Country not found ${response.status}`);


            return response.json();
        })
        // then method will return another promise object
        .then(data => {
            console.log(data);
            renderCountry(data[0]);

            const neighbour = data[0].borders?.[0];
            console.log(neighbour);

            if (!neighbour) return;

            // Country 2 (Chaining Promise)
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

        })
        .then(response => {
            if (!response.ok) //if it's true then it's gonnna be rejected promise
                throw new Error(`Country not found ${response.status}`);

            return response.json();
        })
        .then(data => {
            console.log(data[0]);

            renderCountry(data[0], 'neighbour')
        })
        .catch(err => {
            console.error(`${err}`);
            renderError(`Something went wrong ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
}


btn.addEventListener('click', function () {
    getCountryData('USA');
});