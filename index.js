let deckId;

function getDeck() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(respo => respo.json())
        .then(data => {
            deckId = data.deck_id;
        });
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(respo => respo.json())
        .then(data => {
            console.log(data.cards);
        });
}

document.getElementById('new-deck').addEventListener('click', getDeck);

document.getElementById('draw-cards').addEventListener('click', drawCards);

// -------------- CALLBACK FUNCTIONS --------------

// Functions are first-class objects in JavaScript

// Function can be saved as a variable

// "Function declaration" 
// function myFunction() {return ???};

// "Function expression"
// let myFunction = function() {return ???};

// myFunction x myFunction() 
// myFunction == called when it's time to call it (callback)
// myFunction() => called instantly

// ---------------------- PROMISES -----------------

// Special object in JavaScript

// Has three states:
// Pending - The promise has yet to be completed
// Fulfilled - The promise was completed as promised
// Rejected - The promise was not completed as promised