import React, { useState } from "react";
import Coin from "./coin";
import { choice } from "./helper";

function CoinContainer(props) {
    const [coin, setCoin] = useState(null);
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);

    const flipHandler = () => {
        let newCoin = choice(props.coins)
        setCoin(newCoin)
        if (newCoin.side === "head") {
            setHeadCount(oldCount => oldCount + 1);
        } else {
            setTailCount(oldCount => oldCount + 1);
        }
    }
    return (

        <>
            { coin ? (
            <Coin side={coin.side} imgSrc={coin.imgSrc} />
            ) 
            : null
            }
            <button onClick={flipHandler}>Flip</button>
            <p>
                Out of {headCount + tailCount} flips, there have been {headCount} heads
                and {tailCount} tails.
            </p>
        </>
    )
}


CoinContainer.defaultProps = {
    coins: [
        {
            side: "head",
            imgSrc: "https://tinyurl.com/react-coin-heads-jpg"
        },
        {
            side: "tail",
            imgSrc: "https://tinyurl.com/react-coin-tails-jpg"
        }
    ]
}
export default CoinContainer;