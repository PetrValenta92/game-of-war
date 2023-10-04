let deckId;

function getDeck() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(respo => respo.json())
        .then(data => {
            deckId = data.deck_id;
            document.getElementById('remaining-cards').textContent = `Remaining cards: ${data.remaining}`;
        });
}

function renderImages(cards) {
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("cards-images").children[i].innerHTML = `
            <img class="card" src="${cards[i].image}" alt="Image of card">
        `
    }
}

function getResult(card1, card2) {
    
    const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    
    cardValues.indexOf(card1.value)
    cardValues.indexOf(card2.value)
    
    if(cardValues.indexOf(card1.value) > cardValues.indexOf(card2.value)) {
        return "Computer wins!";
    } else if(cardValues.indexOf(card1.value) < cardValues.indexOf(card2.value)) {
        return "You win!"
    } else {
        return "War!"
    }
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(respo => respo.json())
        .then(data => {
            renderImages(data.cards);
            document.getElementById('result').textContent = getResult(data.cards[0], data.cards[1]);
            document.getElementById('remaining-cards').textContent = `Remaining cards: ${data.remaining}`;
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