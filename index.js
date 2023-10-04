let deckId;
const drawBtn = document.getElementById('draw-cards');
const cardsCount = document.getElementById('remaining-cards');
let compScore;
let userScore;

function getDeck() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(respo => respo.json())
        .then(data => {
            deckId = data.deck_id;
            cardsCount.textContent = `Remaining cards: ${data.remaining}`;
        });
}

function getResult(card1, card2) {
    
    const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    
    cardValues.indexOf(card1.value)
    cardValues.indexOf(card2.value)
    
    if(cardValues.indexOf(card1.value) > cardValues.indexOf(card2.value)) {
        compScore++;
        return "Computer wins the battle!";
    } else if(cardValues.indexOf(card1.value) < cardValues.indexOf(card2.value)) {
        userScore++;
        return "You win the battle!"
    } else {
        return "Keep fighting!"
    }
}

function renderScore() {
    document.getElementById('computer-score').textContent = `Computer's Score: ${compScore}`;
    document.getElementById('user-score').textContent = `User's Score: ${userScore}`;
}

function restartScore() {
    compScore = 0;
    userScore = 0;
    renderScore();
}

function renderCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("cards-images").children[i].innerHTML = `
            <img class="card" src="${cards[i].image}" alt="Image of card">
        `
    }
}

function getWinner() {
    if (compScore > userScore) {
        return 'Computer has won!💀'
    } else if (compScore < userScore) {
        return 'You have won!🚀'
    } else {
        return "It's a tie!🙃"
    }
}

function enableBtn() {
    drawBtn.classList.remove('disabled');
    drawBtn.disabled = false;
}

function disableBtn() {
    drawBtn.classList.add('disabled');
    drawBtn.disabled = true;
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(respo => respo.json())
        .then(data => {
            renderCards(data.cards);
            document.getElementById('result').textContent = getResult(data.cards[0], data.cards[1]);
            cardsCount.textContent = `Remaining cards: ${data.remaining}`;
            if (data.remaining <= 0) {  
                disableBtn();
                document.getElementById('result').textContent = getWinner();
            }
            renderScore();
        });
}

document.getElementById('new-deck').addEventListener('click', () => {
    getDeck();
    restartScore();
    enableBtn();
});

drawBtn.addEventListener('click', drawCards);


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