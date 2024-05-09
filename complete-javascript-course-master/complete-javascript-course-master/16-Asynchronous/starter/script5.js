const countriesContainer = document.querySelector('.countries');

// Consuming Promises with Async/Await

// ES2017 has a better way of handling promises. It makes our code look like regular synchronous code wile behind the scenees, everything is in fact asynchronous.

// Async function : A function that will basically keep running in the background while performing the code that inside of it.

// This function will not block (call stack) main thread of the execution, it will run in the background.

// Async function always return a promise.

/*

const whereAmI = async function(country){
    // await => wait at this point of code for the promise to be fulfilled.
    // as soon as this promise here is resolved, then the value of this whole await expression is going to be the resolved value of the promise.
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await response.json();

    console.log(data);
    renderCountry(data[0]);

    //async/await just simply syntactic sugar over the then method in promises.
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json()) // res.json() returns a new promise
    .then(data => console.log(data));
}

whereAmI('bangladesh');
console.log('FIRST');

// First
// bangladesh


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


*/



/*
const getPosition = () => {
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject);
    });
};

const whereAmI = async function(){
    // Geolocation
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;
    // console.log(pos);

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log('resGeo : ',resGeo);
    console.log('dataGeo : ',dataGeo);


    const response = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
    const data = await response.json();

    console.log(data);
    renderCountry(data[0]);

    //async/await just simply syntactic sugar over the then method in promises.
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    // .then(res => res.json()) // res.json() returns a new promise
    // .then(data => console.log(data));
}

whereAmI();
console.log('FIRST');


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

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Error Handling With try...catch

/*
try{
    let y = 1;
    const x = 2;
    x = 3;
}
catch(err){
    alert(err.message);
}

*/

// Of-course we will not use try catch for our code mistakes, let's now use it in more appropriate place.

/*


const getPosition = () => {
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject);
    });
};

const whereAmI = async function(){
    try{
        // Geolocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;

        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if(!resGeo.ok) throw new Error(`Problem getting location data`);


        const dataGeo = await resGeo.json();
        const response = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);

        if(!response.ok) throw new Error(`Problem getting country`);
        const data = await response.json();
        renderCountry(data[0]);
    }
    catch(err){
        console.error(err);
        renderError(`Something went wrong`,err.message);
    }
}

whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');


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

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}

*/

// Returning Values from Async Functions

/*

const getPosition = () => {
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject);
    });
};

const whereAmI = async function(){
    try{
        // Geolocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;

        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if(!resGeo.ok) throw new Error(`Problem getting location data`);


        const dataGeo = await resGeo.json();
        const response = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);

        if(!response.ok) throw new Error(`Problem getting country`);
        const data = await response.json();
        renderCountry(data[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    }
    catch(err){
        console.error(err);
        renderError(`Something went wrong`,err.message);
    }
}

console.log('1: Will get location');
const city = whereAmI();
// console.log(city); // promise, because async func. always return a promise

whereAmI()
.then(city =>  console.log(city)) // undefined, that means function returns error but it is still resolved! If you want to fix it, rethrow the error from catch block
.catch(err => console.error(`2: ${err.message}`));

console.log('3: Finished getting location');


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

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}

*/

const getPosition = () => {
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject);
    });
};

const whereAmI = async function(){
    try{
        // Geolocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;

        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if(!resGeo.ok) throw new Error(`Problem getting location data`);


        const dataGeo = await resGeo.json();
        const response = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);

        if(!response.ok) throw new Error(`Problem getting country`);
        const data = await response.json();
        renderCountry(data[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    }
    catch(err){
        console.error(err);
        renderError(`Something went wrong`,err.message);

        // Reject promise returned from async function
        throw err;
    }
}

console.log('1: Will get location');
const city = whereAmI();
// console.log(city); // promise, because async func. always return a promise

// whereAmI()
// .then(city =>  console.log(city))
// .catch(err => console.error(`2: ${err.message}`))
// .finally(() => console.log('3: Finished getting location'));

// but still we are mixing latest async/await approach with old then,catch apprach. let's convert it to async/await

(async function(){
    try{
        const city = await whereAmI();
        console.log(city);
    }catch(err){
        console.error(`2: ${err.message}`);
    }

    console.log('3: Finished getting location');

})();


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

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}