let deckId;

function getDeck() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(respo => respo.json())
        .then(data => {
            deckId = data.deck_id;
        });
}

document.getElementById('new-deck').addEventListener('click', getDeck);