// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length){
        return false;
    }
    let freq = {};
    let freq2 = {};
    for (let i =0; i < str1.length; i++){
        let val = freq[str1[i]] || 0;
        val += 1;
        freq[str1[i]] = val;       
    }
    for (let j =0; j < str2.length; j++){
        let val = freq2[str2[j]] || 0;
        val += 1;
        freq2[str2[j]] = val;       
    }
    const keys1 = Object.keys(freq);
    const keys2 = Object.keys(freq2);
    if (keys1.length !== keys2.length) {
        return false;
      }
    for (let key of keys1){
        if (freq[key] !== freq2[key]){
            return false;
        }
    }
    return true;
    

}


module.exports = sameFrequency;