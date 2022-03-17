import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import axios from "axios";
import './Card.css';

function CardList() {
    const [deck, setDeck] = useState(null)
    const [draw, setDraw] = useState([])
    const [autoDraw, setAutoDraw] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        async function shuffleCard() {
            let d = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/");
            setDeck(d)
        }
        shuffleCard()
    }, [setDeck])

    useEffect(() => {
        async function drawCard() {
            let { deck_id } = deck.data;
            console.log(deck)
            try {
                let drawRes = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
                if (drawRes.data.remaining === 0) {
                    setAutoDraw(false);
                    throw new Error("no cards remaining!");
                }
                const card = drawRes.data.cards[0];

                setDraw(d => [
                    ...d,
                    {
                        id: card.code,
                        name: card.suit + " " + card.value,
                        image: card.image
                    }
                ])
            } catch (err) {
                alert(err);
            }
        }
    if (autoDraw && !timerRef.current) {
      timerRef.current = setInterval(async () => {
        await drawCard();
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
    }, [setDraw, autoDraw, deck])

    const toggleAutoDraw = () => {
        setAutoDraw(auto => !auto);
    };

    return (
        <>
            <div>
            {draw.map(c =>
                <Card key={c.id} name={c.name} image={c.image} />
            )}
            </div>
            <div>
            <button className="Deck-gimme" onClick={toggleAutoDraw}>Gimme Card</button>
            </div>
        </>
    )
}

export default CardList;
