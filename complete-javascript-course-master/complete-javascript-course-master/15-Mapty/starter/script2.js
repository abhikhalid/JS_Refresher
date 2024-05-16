// Refactoring for Project Architecture

'use strict';


// When we convert an object to string and then convert the string to object, we lost the prototype chain.
// this can be a big problem, when you work with local storage and object-oriented programming.

class Workout{
    date = new Date();
    id =  (Date.now() + '').slice(-10);
    clicks=0;

    constructor(coords,distance,duration){
        //this.date = ....
        //this.id = ....
        this.coords = coords; // [lat,lng]
        this.distance = distance; // in km
        this.duration = duration; // in minutes
    }

    _setDescription(){ // we couldn't call this method on workout object because it doesn't have a type.
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click(){
        this.clicks++;
    }
}

class Running extends Workout{
   type = 'running';
   constructor(coords,distance,duration,cadence){
      super(coords,distance,duration);
      this.cadence = cadence;
    //   this.type = 'cycling';
      this.calcPace();
      this._setDescription();
   }

   calcPace(){
      // min/km
      this.pace = this.duration/this.distance;
      return this.pace;
   }
}

class Cycling extends Workout{
    type = 'cycling';

    constructor(coords,distance,duration,elevationGain){
        super(coords,distance,duration);
        this.elevationGain = elevationGain;
        // this.type = 'cycling';
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed(){
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

//testing
// const run1 = new Running([39,-12],5.2,24,178);
// const cycling1 = new Cycling([39,-12],27,95,523);
// console.log(run1,cycling1);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// APPPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App{
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor() {
        // this.workouts = [];

        // Get user's position
        this._getPosition();

        // Get Data from local storage
        this._getLocalStorage();

        // Attach event handlers
        form.addEventListener('submit',this._newWorkout.bind(this));
        inputType.addEventListener('change',this._newWorkout.bind(this));
        containerWorkouts.addEventListener('click',this._moveToPopup.bind(this));
    }

    _getPosition() {
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), ()=> {
            alert('Could not get your position');
        });
    }

    _loadMap(position){
         const {latitude} = position.coords;
         const {longitude} = position.coords;
         // console.log(latitude,longitude);
         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

         const coords = [latitude,longitude];
         console.log(this); // in regular function call. this keyword is set to undefined.

         this.#map = L.map('map').setView(coords, this.#mapZoomLevel); // L -> namespaces
         console.log(this.#map);

         L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         }).addTo(this.#map);

         // Handling clicks on map
         this.#map.on('click',this._showForm.bind(this));

         this.#workouts.forEach(work => {
            this._renderWorkout(work);
            this._renderWorkoutMarker(work);
       });
    }

    _showForm(mapE){
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _hideForm(){
        // Empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(()=> form.style.display='grid',1000);
    }

    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e){

        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp)); //helper function
        const allPositive = (...inputs) => inputs.every(inp => inp > 0); // helper function

        e.preventDefault();
        console.log(this);

        // Get data from 'form'
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat,lng} = this.#mapEvent.latlng;
        let workout;

        // If activity running, create running object
        if(type === 'running'){
           const cadence = +inputCadence.value;
           // Check if data is valid
         if(
        //     !Number.isFinite(distance)
        //      || !Number.isFinite(duration) ||
        //      !Number.isFinite(cadence)
             !validInputs(distance,duration,cadence) || !allPositive(distance,duration,cadence)
            ) // if the distance here is not a number
           {
             return alert('Inputs have to be positive numebrs!');
           }

           workout = new Running([lat,lng],distance, duration,cadence);

        }
        // If activity cycling, create cycling object
        if(type === 'cycling'){
           const elevation = +inputElevation.value;
           // Check if data is valid
           if(!validInputs(distance,duration,elevation) || !allPositive(distance,duration))
           {
             return alert('Inputs have to be positive numebrs!');
           }

           workout = new Cycling([lat,lng],distance, duration,elevation);
        }

        // Add new object to workout array
        this.#workouts.push(workout);
        console.log(this.#workouts);

        // Render workout on map as marker
        this._renderWorkoutMarker(workout);

        // Render workout on list
        this._renderWorkout(workout);

        // Hide form + clear input fields
        this._hideForm();

        // Set local storage to all workouts
        this._setLocalStorage();
    }



    _renderWorkoutMarker(workout){
        // console.log(this.#mapEvent);
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`
                }))
             .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
             .openPopup();
    }

    _renderWorkout(workout){
       let html = `<li class="workout workout--${workout.type}" data-id=${workout.id}>
                        <h2 class="workout__title">${workout.description}</h2>
                        <div class="workout__details">
                            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
                            <span class="workout__value">${workout.distance}</span>
                            <span class="workout__unit">km</span>
                        </div>
                        <div class="workout__details">
                            <span class="workout__icon">⏱</span>
                            <span class="workout__value">${workout.duration}</span>
                            <span class="workout__unit">min</span>
                        </div>`;

            if(workout.type === 'running'){
                html += `<div class="workout__details">
                            <span class="workout__icon">⚡️</span>
                            <span class="workout__value">${workout.pace.toFixed(1)}</span>
                            <span class="workout__unit">min/km</span>
                         </div>
                        <div class="workout__details">
                            <span class="workout__icon">🦶🏼</span>
                            <span class="workout__value">${workout.cadence}</span>
                            <span class="workout__unit">spm</span>
                        </div>`;
             }

             if(workout.type === 'cycling'){
                html += ` <div class="workout__details">
                            <span class="workout__icon">⚡️</span>
                            <span class="workout__value">${workout.speed.toFixed(1)}</span>
                            <span class="workout__unit">km/h</span>
                          </div>
                        <div class="workout__details">
                            <span class="workout__icon">⛰</span>
                            <span class="workout__value">${workout.elevationGain}</span>
                            <span class="workout__unit">m</span>
                        </div>`;

             }

          form.insertAdjacentHTML('afterend',html);
    }

    _moveToPopup(e){
        const workoutEl = e.target.closest('.workout');
        console.log(workoutEl);
        console.log(workoutEl.dataset);

        if(!workoutEl) return;

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

        console.log(workout);

        this.#map.setView(workout.coords,this.#mapZoomLevel,{
            animate: true,
            pan: {
                duration:1
            }
        });

        // using the public interface
        // workout.click();
    }

    _setLocalStorage(){
        //local storage is another api that browser provides us.
        // you shouldn't use local storage for large amount of data. that will surely slow down your application.
        localStorage.setItem('workouts',JSON.stringify(this.#workouts));
    }

    _getLocalStorage(){
       const data = JSON.parse(localStorage.getItem('workouts'));
       console.log(data);

       if(!data) return;

       this.#workouts = data;
    }

    reset(){
        localStorage.removeItem('workouts');
        location.reload();
    }

}

const app = new App();
// app.reset();


// ADDITIONAL FEATURE IDEAS : CHALLENGES
// i. Ability to edit a workout
// ii. Ability to delete a workout from UI.
/// iii. Ability to delete all workouts from UI.
//  iv. Ability to sort workouts by a certain field. (eg. distance)
// v.  Re-build Running and Cycling objects coming from local storage. (fix the prototype chain issue)
// vi. More realistic error and confimration messages insteaf of allert. Fade out the message after some time.
// vii. Ability to position the map to show all workouts. [very hard. read leaflet documentation]
// viii. Ability to draw lines and shapes instead of just points.
// ix. Display weather data for workout time and place.

