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