

function countDown(num) {
    let number = setInterval(function () {
        num--;
        if (num <= 0) {
            clearInterval(number);
            console.log("Done!");
        } else {
         console.log(num);
        }
    }, 1000);
}

countDown(4);


function randomGame () {
    let number;
    let tries = 0;
    let randomNumber = setInterval( function () {
        number = Math.random();
        tries += 1;
        // console.log(number);
        if (number > 0.75) {
               clearInterval(randomNumber);
               console.log(`try times: ${tries}` );
        };
    }, 1000);
}


randomGame();


