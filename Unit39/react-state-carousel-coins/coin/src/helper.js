
function choice (arr){
    let randomIDX = Math.floor(Math.random() * arr.length)
    console.log(randomIDX)
    return arr[randomIDX]
}

export {choice};