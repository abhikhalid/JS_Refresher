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

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


btnScrollTo.addEventListener('click', (e) => {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

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
    section1.scrollIntoView({ behavior: 'smooth' });
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

document.querySelector('.nav__links').addEventListener('click', function (e) {
    console.log(e.target); // where that event happened
    e.preventDefault();

    // Matching startegy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

// DOM Traversing

// Dom traversing is basically walking through the DOM. we can select an element based on another element.
// sometimes we need to select elements relative to certain other element.
// For example, a direct child or a direct parent element. or sometimes we don't even know the structure of the dom at runtime.
// And all these cases, we need DOM traversing.

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight')); // here in this case, two childs are direct children of the h1, but it would go down as deep as necessary into the DOM tree.
// if there were other highlight elements on the page with this class (hihglight),
//they would not get selected, because they would not be children of the h1 element.


// READ: difference between querySelector() and querySelectorAll()

// sometimes we need actually direct children
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orange';


// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'pink'; // closest parent elment of h1 which has 'header' class

// h1.closest('h1').style.background = 'tomato';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
    // if(el!=h1) el.style.transform = 'scale(0.5)';
})


// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));
// but this is really a bad practice, what if we had 200 tabs, then we would have 200 copies of this exact callback function.
// that would simply slow down the page.

// Use Event Delegation

tabContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);

    //Guard clause
    if (!clicked) return;

    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    clicked.classList.add('operations__tab--active');

    // Active content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');

});


// Passing Arguments to Event Handlers

// Menu Fade Animation
const nav = document.querySelector('.nav');

// mouseover and mouseenter are similar events. difference is mouseenter does not bubble.

// opposite of mouserover is mouseout
// opposite of mouseenter is mouseleave

const handleHover = function (e) {

    console.log(this);

    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        console.log(link);

        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el != link) el.style.opacity = this;
        })

        logo.style.opacity = this;
    }
}

//It's impossible to pass another argument into an eventHandler function.
// handler function can take only one argument
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));



// Implementing a Sticky Navigation: The Scroll Event

// Scroll event is not really efficient and it should be avoided.(bad for performance)

// Sticky navigation
/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);


window.addEventListener('scroll', function (e) {
    console.log(window.scrollY);

    if (this.window.scrollY > initialCoords.top) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
*/

// A better way: The Intersection Observer API

// let's now implement the same sticky navigation using the new intersection observer API.
// This API allows our code to basically observe changes to the way that a certain target element intersects another element.


// this callback will get called each time the observed element/target element (here : section1) is intersecting the root element at the threshold that we defined.

// In the current example, whenever the first section (our target here), is intersecting the viewport at 10%. so, the viewport that's the (root) and 10% because that's the threshold. whenever that happens this function will get called and that's no matter if we are scrolling up or down.

// this case we are only interested in entries but sometimes using the observer is also helpful.

// entries are actually an array of the threshold entries.

/*
const obsCallback = function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
    });
};

const obsOptions = {
    root: null,// root element will be the element that we want our target element to intersect
   // threshold: 0.1, // (10% = 0.1) The percentage of intersection at which the observer callback will be called
    // we can have multiple threshold
    threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions); 

//new IntersectionObserver(obsCallback,obsOptions); this object here is basically will also get passed into the callback function.

observer.observe(section1); //target is section 1

*/

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);
    
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');

}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null, // null because we are interested in entire view-port
    threshold: 0, // we are interested in showing the sticky navigation as soon as the header scrolls completely out of the view.
    // when 0% of the header is visible then we want something to happen.
    // rootMargin: '-90px', // 90 is the height of navigation
    rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);