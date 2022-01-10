// $.getJSON("http://numbersapi.com/7?json")
//     .then(data => console.log(data))

// let favNumbers= [2,5,7]
// $.getJSON(`http://numbersapi.com/${favNumbers}?json`)
//     .then(data => console.log(data))


// let res = $.getJSON("http://numbersapi.com/7?json")
// Promise.all(Array.from({length: 4}, ()=> res))
//     .then(facts => {
//     facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
//   });

async function number(){
    let res = await $.getJSON("http://numbersapi.com/7?json")
    console.log(res)
}
number()


async function favnumbers(){
    let favNumbers= [2,5,7]
    let res = await $.getJSON(`http://numbersapi.com/${favNumbers}?json`)
    console.log(res)
}
favnumbers()

async function addNums(){
    let res = await $.getJSON("http://numbersapi.com/7?json")
    let results = await Promise.all(Array.from({length: 4}, ()=> res))
    results.forEach(data => $("body").append(`<p>${data.text}</p>`));
}
addNums()