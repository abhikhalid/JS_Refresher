'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// Implementing Smooth Scrooling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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


// Event Delegation: Implementing Page Navigation
/*
document.querySelectorAll('.nav__link').forEach(function(el){
    el.addEventListener('click',function(e){
        e.preventDefault();

        const id = this.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    })
})

*/
//but the problem is that it's not really efficient. So we are adding here the exact same callback function, so this event handler here, we are adding it once to each of these three elements.
// So the exact same function is now attached to these three elements. And that's kind of unnecessary. I mean, of course it would be fine for only three elements, but what if we had 1000, or like 10,000 elements?
// If we were to attach an event handler to 10,000 elements like this, so like we did here with the forEach function, then we would effectively be creating 10,000 copies of this same function here.
// And so that would then certainly impact the performance. And it's really just not a clean solution in that case. And so, the better solution without a doubt, is to use events delegation.
// So in event delegation, we use the fact that events bubble up. And we do that by putting the eventListener on a common parent of all the elements that we are interested in.


// 1. Add Event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click',function(e){
    console.log(e.target); // where that event happened
    e.preventDefault();

    // Matching startegy
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
});