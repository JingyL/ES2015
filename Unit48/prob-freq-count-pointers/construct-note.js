// add whatever parameters you deem necessary
function constructNote(message, letter) {
    let count = {}
    if (!letter){
        return false;
    }
    if (!message){
        return true;
    }
    
    for (let i = 0; i < letter.length; i++){
        let val =count[letter[i]] || 0;
        count[letter[i]] = val + 1;
    }
    for (let i = 0; i < message.length; i++){
        if (!count[message[i]]){
            return false;
        }
        count[message[i]] -= 1;
        if (count[message[i]] < 0){
            return false;
        }
    }
    return true;
}
module.exports = constructNote;