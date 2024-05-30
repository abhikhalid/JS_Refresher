// Revealing Elements on Scroll

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});


// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px', // doing it to load image before the threshold is actually reached
});

imgTargets.forEach(img => imgObserver.observe(img));




// Building a Slider Component

// Slider
const slider = function () {

    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    let maxSlide = slides.length;

    const slider = document.querySelector('.slider');

    // _ throw array variable. variable that we don't even need.
    //  beforeend basically add as the last child always
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    }

    const activateDot = function (slide) {
        document.querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));

        document.querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    }


    // 0%, 100%, 200%, 300%
    // the width of each of these images is 100%
    const goToSlide = function (slide) {
        slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
    }



    const nextSlide = function () {
        if (curSlide == maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    }

    const prevSlide = function () {
        curSlide--;

        if (curSlide < 0) curSlide = maxSlide - 1;

        goToSlide(curSlide);
        activateDot(curSlide);
    }


    const init = function () {
        goToSlide(0);
        createDots();
        activateDot(0);
    }

    init();

    // Event Handlers
    // Next Slide
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        console.log(e);
        // if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowLeft' && prevSlide();

        e.key === 'ArrowRight' && nextSlide();
    });

    // Event Delegation
    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            console.log(e.target.dataset);
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
}

slider();


// Lifecycle DOM Events

// LifeCycle : right from the moment that the page is accessed, until the user leaves it.

// DOM content loaded : This event is fired by the document as soon as the HTML is completely parsed. which means that the HTML has been downloaded and been converted to the DOM tree. also all scripts must be downloaded and executed before the DOM content loaded event can happen.

// This event does not actually wait for images and other external resources to load.
// Just HTML and JavaScript need to be loaded.

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML parsed and DOM tree built', e);
});

// next event is load event
// Load Event: is fired by window. As soon as not only the HTMl is parsed but also all the images and external resources like CSS files are also loaded. So basically, when the complete page has finished loading, this event gets fired.

window.addEventListener('load', function (e) {
    console.log('Page fully loaded', e);
});

//this event is fired before the user about to leave a page.
// we can basically use this event to ask users if they are 100% sure to leave the page.
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    console.log(e);

    e.returnValue = ''; // in order to display a leaving confirmation, we need to set the return value on the event to an empty string.
});