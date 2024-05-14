'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


let map, mapEvent;

// Geolocation API is a browser API
if(navigator.geolocation) //for older browser to check if geolocation supports or not

navigator.geolocation.getCurrentPosition((position)=> {
    // console.log(position);
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    // console.log(latitude,longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude,longitude];

    map = L.map('map').setView(coords, 13); // L -> namespaces
    console.log(map);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Handling clicks on map
    map.on('click', function(mapE){
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    });


}, ()=> {
    alert('Could not get your position');
});


// console.log(firstName);

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    // Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

    // Display Marker
    console.log(mapEvent);
    const {lat,lng} = mapEvent.latlng;

    L.marker([lat,lng])
        .addTo(map)
        .bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup'
            }))
         .setPopupContent('Workout')
         .openPopup();
});

inputType.addEventListener('change',()=>{
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});