// Throwing Errors Manually (Removed duplicate Code)
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

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
}

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
        .then(data => {
            console.log(data);
            renderCountry(data[0]);

            const neighbour = data[0].borders?.[0];
            console.log(neighbour);

            if (!neighbour) throw new Error('No neightbour found!');

            // Country 2 (Chaining Promise)
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, `Country not found`);

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