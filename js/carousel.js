
let intervalID;
let cardWidth = document.querySelector('.new-event-card').offsetWidth + 15;
const anchors = document.querySelectorAll('#events-nav-tag');
const anchorsArray = Array.from(anchors);
let index = 0;

function scrollToPosition(elementToScroll) {
    const target = document.querySelector(elementToScroll);
    const container = document.querySelector('.event-cards-container');

    container.scrollTo({
        left: target.offsetLeft - container.offsetLeft,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.event-cards-container');
    const firstCard = document.querySelector('#first-card');

    console.log("<<<<<<<<<<<<<<<<<");
    console.log("cardwidth: ", cardWidth);
    console.log("firstCard, ", firstCard);
    console.log("First Card Margin: ", window.getComputedStyle(firstCard).marginLeft);

    if (container && firstCard) {
        console.log("loaded");
        console.log("containerWidth ", container.offsetWidth);
        console.log("containerSpot ", container.offsetLeft);
        console.log("cardWidth ", firstCard.offsetLeft);
        console.log("scroll left, ", container.scrollLeft);

        scrollToPosition('#first-card');

        console.log("scrollLeft ", container.scrollLeft);

        console.log("scroll left, ", container.scrollLeft);

    }

    startInterval();
    setActiveButton();
});


if (window.location.hash) {
    history.replaceState(null, null, ' '); // Removes the hash from the URL without refreshing
}

const hrefArray = document.querySelectorAll('#events-nav-tag');

hrefArray.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        index = anchorsArray.indexOf(anchor);
        setActiveButton();

        scrollToPosition(this.getAttribute('href'));

        resetInterval();
    });
});

function setActiveButton() {
    for (let i = 0; i < anchorsArray.length; i++) {
        if (i != index) {
            const button = anchorsArray[i].querySelector('button');
            if (button) button.style.transform = "";
        }
    }

    console.log(anchorsArray[index]);
    console.log(anchorsArray[index].querySelector('button'));
    const activeButton = anchorsArray[index].querySelector('button');
    if (activeButton) activeButton.style.transform = "scale(1.2)";
}

const container = document.querySelector('.event-cards-container');
let backScrollLeft = document.querySelector("#first-card").offsetLeft;
let frontScrollLeft = document.querySelector("#last-card").offsetLeft - cardWidth;
const eventBackButton = document.getElementById('back-button');
const eventFrontButton = document.getElementById('front-button');
eventBackButton.addEventListener('click', moveLeft);

eventFrontButton.addEventListener('click', moveRight);

container.addEventListener("wheel", function (event) {
    if (event.deltaX !== 0) {
        event.preventDefault(); // Block horizontal scrolling
    }
}, { passive: false }); // Important to allow `preventDefault()`

// Create a manager to manager the element
var manager = new Hammer.Manager(container);

// Create a recognizer
var Swipe = new Hammer.Swipe();

// Add the recognizer to the manager
manager.add(Swipe);
console.log("manager, ", manager);

// Declare global variables to swiped correct distance
var deltaX = 0;
var deltaY = 0;

// Subscribe to a desired event
//2 is forward, 4 is backward
manager.on('swipe', function (e) {
    deltaX = deltaX + e.deltaX;
    var direction = e.offsetDirection;
    console.log("direction of swipe", direction);
    if (direction === 2) {
        moveRight();
    } else if (direction === 4) {
        moveLeft();
    }
});

function moveLeft() {
    console.log("hi", backScrollLeft);
    console.log(container.scrollLeft);
    cardWidth = document.querySelector('.new-event-card').offsetWidth + 15;
    backScrollLeft = document.querySelector("#first-card").offsetLeft;
    frontScrollLeft = document.querySelector("#last-card").offsetLeft - cardWidth;

    if (container.scrollLeft <= backScrollLeft) {
        console.log("here");
        index = anchorsArray.length - 1;
    }
    else {
        index--;
    }

    scrollToPosition(hrefArray[index].getAttribute('href'));


    const endScroll = container.scrollLeft;

    console.log(endScroll);

    setActiveButton();


    resetInterval();

}

function moveRight() {
    console.log("hi", frontScrollLeft);
    console.log(container.scrollLeft);
    cardWidth = document.querySelector('.new-event-card').offsetWidth + 15;
    backScrollLeft = document.querySelector("#first-card").offsetLeft;
    frontScrollLeft = document.querySelector("#last-card").offsetLeft - cardWidth;

    console.log("container ", container.offsetWidth);
    console.log("first card ", backScrollLeft);


    if (container.scrollLeft >= frontScrollLeft) {
        console.log("here");
        index = 0;
    }
    else {

        index++;
    }

    scrollToPosition(hrefArray[index].getAttribute('href'));

    console.log(container.scrollLeft);

    setActiveButton();

    resetInterval();

}

function resetInterval() {
    clearInterval(intervalID);
    startInterval();
}

function startInterval() {
    intervalID = setInterval(moveRight, 5000);
    console.log("interval started");
}




