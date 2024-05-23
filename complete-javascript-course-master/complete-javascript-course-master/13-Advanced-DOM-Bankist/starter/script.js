'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


////////////////////////////////////////////////////
///////////////////////////////////////////////////
// Selecting, Creating and Deleting Elements

// Selecting Elements



console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('header');

const allSections = document.querySelectorAll('section'); // returns a Nodelist.
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); // returns a HTMLCollection list which updates automatically.
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Difference between HTML Collection and Nodelist ?
// What is Node?

// Creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement('div'); // message is DOM object
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';


// message is a indeed a life element living in the DOM. Therefore, it can not be at multiple placse at the same time.
// it's just a like a person that can not be at multiple places simultaneously.
// header.append(message);
// header.prepend(message);

// DOM element is unique and can only exist at one place at a time. But what if we want the same DOM at multiple places?
// header.append(message.cloneNode(true));


header.append(message);

// header.before(message);
// header.after(message);


// Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', ()=>{
  message.remove();
})



// Styles, Attributes and Classes

// Styles (set as inline styles)
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height); // nothing because it look for inline style
console.log(message.style.color); // nothing because it look for inline style
console.log(message.style.backgroundColor); //'#37383d'

console.log(getComputedStyle(message)); // get the external or internal css
console.log(getComputedStyle(message).color); // get the external or internal css
console.log(getComputedStyle(message).height); // does not exist anywhere so browser calculates it

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary','orangered');


// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className); //nav__logo

logo.alt = 'Beautiful logo';

// Non-standard
console.log(logo.designer); // undefined, because that is not standard property on images
console.log(logo.getAttribute('designer'));

logo.setAttribute('comapany','Banist');

console.log(logo.src); //absolute version
console.log(logo.getAttribute('src')); //relative version

const link = document.querySelector('.twitter-link');
//both are absoulte value
console.log(link.href);
console.log(link.getAttribute('href'));


const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c','j','k'); //just writing fake class name
logo.classList.remove('c','j','k'); //just writing fake class name
logo.classList.toggle('c','j','k'); //just writing fake class name
logo.classList.contains('c','j','k'); //just writing fake class name

// logo.className = 'jonas'; // don't use this because this will override all the existing classes.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementing Smooth Scrooling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e)=>{
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)',window.pageXOffset, window.pageYOffset);

    console.log('height/width viewport',document.documentElement.clientHeight, document.documentElement.clientWidth);

    // Scrolling
    //window.scrollTo(s1coords.left, s1coords.top); // does not work properly? right? because getBoundingClientRect() returns with respect to viewport not document
    // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

    // to add animation
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });


    // Modern way
    section1.scrollIntoView({behavior:'smooth'});
});