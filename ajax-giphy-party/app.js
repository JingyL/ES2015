console.log("Let's get this party started!");
const btn = document.querySelector('#submit');
let input = document.querySelector('#search');
// console.log(searchName);

btn.addEventListener('click', search);

// Fetch Data
async function fetchData(searchTerm) {
    const gifData = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "ZHvzl2hPKRrqnbEXV0iuaV8ewYFshS1N"
        }
    });
    let res = gifData.data.results;
    console.log(res);
    return res;
}

// Get random image Src
async function imageSrc() {
    let searchName = input.value;
    // console.log(searchName);
    let giphyData = await fetchData(searchName);
    console.log(giphyData);
    let numResults = giphyData.length;
    console.log(numResults);
    let randomIdx = Math.floor(Math.random() * numResults);
    console.log(randomIdx);
    let imgUrl = giphyData[randomIdx].images.original.url;
    console.log(imgUrl);
}