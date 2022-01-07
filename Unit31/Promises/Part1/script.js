$.getJSON("http://numbersapi.com/7?json")
    .then(data => console.log(data))

let favNumbers= [2,5,7]
$.getJSON("http://numbersapi.com/${favNumbers}?json")
    .then(data => console.log(data))


let res = $.getJSON("http://numbersapi.com/7?json")
Promise.all(Array.from({length: 4}, ()=> res))
    .then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });