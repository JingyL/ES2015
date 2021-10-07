console.log("Let's get this party started!");
const btn = document.querySelector('#submit');
const removeBtn = document.querySelector('#remove');
let input = document.querySelector('#search');
const div = document.querySelector('#images');
const form = document.querySelector('form');
// console.log(searchName);

btn.addEventListener('click', function(e){
    e.preventDefault();
    createImages();
    form.reset();
});

removeBtn.addEventListener('click', function(e){
    e.preventDefault();
    deleteImg();
});

// Fetch Data
async function fetchData(searchTerm) {
    const gifData = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "ZHvzl2hPKRrqnbEXV0iuaV8ewYFshS1N"
        }
    });
    let res = gifData.data;
    return res;
}

// Get random image Src
async function imageSrc() {
    let searchName = input.value;
    // console.log(searchName);
    let giphyData = await fetchData(searchName);
    // console.log(giphyData);
    let numResults = giphyData.data.length;
    // console.log(numResults);
    let randomIdx = Math.floor(Math.random() * numResults);
    // console.log(randomIdx);
    let imgUrl = giphyData.data[randomIdx].images.original.url;
    return imgUrl;
}

async function createImages() {
    let url = await imageSrc();
    const img = document.createElement('IMG');
    img.src = url;
    div.append(img);
}
function deleteImg() {
    const image = document.querySelectorAll('img');
    for (let each of image) {
        div.removeChild(each);
    }
}

