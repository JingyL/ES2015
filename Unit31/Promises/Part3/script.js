// $.getJSON(`https://pokeapi.co/api/v2/pokemon/?limit=1000`).then(data => {
//     console.log(data);
// });

// $.getJSON(`https://pokeapi.co/api/v2/pokemon-species/201/`)
// .then(data=> {
//     console.log(data.flavor_text_entries[0])
// })


let $btn = $("button");
let $pokeArea = $("#pokemon-area");
let threeNums = getRandomInt(1000);
let all_urls = [];

$btn.on("click", function() {
    $pokeArea.empty();
$.getJSON(`https://pokeapi.co/api/v2/pokemon/?limit=1000`)
    .then(data => {
        threeNums.forEach(function (eachNum) {
            console.log(data.results[eachNum])
            all_urls.push(data.results[eachNum].url)
        })
        return Promise.all(all_urls.map(url => $.getJSON(url)));
    })
    .then(data =>{
        name_and_images = data.map(pokemon => ({
            name: pokemon.name,
            imgSrc: pokemon.sprites.front_default
          }));
          return Promise.all(data.map(p => $.getJSON(p.species.url)));
    })
    .then(data => {
        data.forEach((d, i) => {
          let descriptionObj = d.flavor_text_entries.find(function(entry) {
            return entry.language.name === "en";
          });
          let { name, imgSrc } = name_and_images[i];
          $pokeArea.append(presentPokemon(name, imgSrc, descriptionObj.flavor_text));
        });
      });   
    });


function getRandomInt(max) {
    let res = [];
    for (let i = 0; i < 3; i++) {
        res.push(Math.floor(Math.random() * max));
    }
    return res
}

function presentPokemon(name, imgSrc, description) {
    return `
      <div class="card">
        <h1>${name}</h1>
        <img src=${imgSrc} />
        <p>${description}</p>
      </div>
    `;
  }






