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




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Types of Events and Event Handlers

// Event is basically a signal that is generated by a certain dumb node. and a signal means that something has happened
// For example, a click somewhere or the mouse moving or the user triggering the full screen mode ans so on.

const h1 = document.querySelector('h1');

const alertH1 = function(e){
  alert('addEventListener: Great! You are reading the heading :D');

  // h1.removeEventListener('mouseenter',alertH1);
};

h1.addEventListener('mouseenter',alertH1);

// this way of listening to an event is bit old school
// h1.onmouseenter =  function(e){
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// difference is we can set multiple event to a same addEventListener() method. where as if we follow on___ approach it would repalce the replace event.

// we can also remove the event listener in addEventListener() approach

setTimeout(()=>  h1.removeEventListener('mouseenter',alertH1),3000);

// also we can set event directly to html element. (old school approach)
// go to index.html line no 46



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event Propagation: Bubbing and Capturing

// JavaScript events have a very important property. They have a so-called capturing phase and a bubbling phase.

// Follow Slide.
// For example if users click on <a></a> element. Instead event is actually generated at the root of the document, so at the very of the DOM tree.
// And from there, the so-called 'Capturing Phase' happens where the event then travels all the way down from the document route to the target element.
// And as the event travels down the tree, it will pass every single parent element of the target element. As soon as the event reaches the target, the 'TARGET' phase begins.
// where events can be handled right at the target. As we already know, we do that with event listeneres, such as this one. So, event listeners wait for a certain event to happen on a certain element.
// And as soon as the event occurs, it runs the attached callback function.
// After reaching the target, the event then actually travels all the way up to the document route again in the so called bubbling phase.
// Events passes through all its parent elements, really just parents not through any sibling elements.
// Events can only be handled in the target and in the bubbling phase.
// However we can set up event listeners in a way that they listen in the 'Capturing' phase instead.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Propagation in Practice

// e.target -> where the event actually happened
// e.currentTarget -> the element on which the event handler is attached

///rgb(255,255,255)

const randomInt = (min,max) => {
  return Math.floor(Math.random() * (max-min+1) + min);
}

const randomColor = () => {
  return`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
}

document.querySelector('.nav__link').addEventListener('click', (e)=>{
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', (e)=>{
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER',e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', (e)=>{
  this.style.backgroundColor = randomColor();
  console.log('NAV',e.target, e.currentTarget);
});