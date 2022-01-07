
$.getJSON("http://deckofcardsapi.com/api/deck/new/draw/")
    .then(data => console.log(`${data.cards[0].value}, ${data.cards[0].suit}`))

let firstCard;
$.getJSON("http://deckofcardsapi.com/api/deck/new/draw/")
    .then(data => {
        firstCard = data.cards[0];
        let deckId = data.deck_id;
        return $.getJSON(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    })
    .then(data => {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function (card) {
            console.log(`${card.value},${card.suit}`);
        });
    });

let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');

$.getJSON(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then(data => {
    deckId = data.deck_id;
});

$btn.on('click', function () {
    $.getJSON(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(data => {
            let card = data.cards[0];
            let image = card.image
            $cardArea.append(
                $('<img>', {
                    src: image
                })

            );
            if (data.remaining === 0) $btn.remove();
        });
});