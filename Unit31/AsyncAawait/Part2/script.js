
// $.getJSON("http://deckofcardsapi.com/api/deck/new/draw/")
//     .then(data => console.log(`${data.cards[0].value}, ${data.cards[0].suit}`))

async function drawCard(){
        let res = await $.getJSON("http://deckofcardsapi.com/api/deck/new/draw/")
        console.log(res.cards[0].value, res.cards[0].suit)
    }
drawCard()

// let firstCard;
// $.getJSON("http://deckofcardsapi.com/api/deck/new/draw/")
//     .then(data => {
//         firstCard = data.cards[0];
//         let deckId = data.deck_id;
//         return $.getJSON(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
//     })
//     .then(data => {
//         let secondCard = data.cards[0];
//         [firstCard, secondCard].forEach(function (card) {
//             console.log(`${card.value},${card.suit}`);
//         });
//     });


async function drawCard2(){
        let res = await $.getJSON("http://deckofcardsapi.com/api/deck/new/draw/")
        let firstCard = res.cards[0];
        let deckId = res.deck_id;
        let res2 = await $.getJSON(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
        let secondCard = res2.cards[0];   
        [firstCard, secondCard].forEach(function (card) {
            console.log(`${card.value},${card.suit}`);
        });             
    }
drawCard2()



let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');

// $.getJSON(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then(data => {
//     deckId = data.deck_id;
// });

// $btn.on('click', function () {
//     $.getJSON(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//         .then(data => {
//             let card = data.cards[0];
//             let image = card.image
//             $cardArea.append(
//                 $('<img>', {
//                     src: image
//                 })

//             );
//             if (data.remaining === 0) $btn.remove();
//         });
// });



$btn.on('click', async function () {
    let shuffle = await $.getJSON("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    let deckId = shuffle.deck_id

    let data = await $.getJSON(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)

    let card = data.cards[0];
    let image = card.image
     $cardArea.append(
        $('<img>', {
            src: image
        })

        );
    if (data.remaining === 0) $btn.remove();

    });

