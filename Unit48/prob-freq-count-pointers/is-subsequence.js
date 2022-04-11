// add whatever parameters you deem necessary
function isSubsequence(sub, string) {
    if (sub.length === 0){
        return true;
    }
    if (string.length === 0){
        return false;
    }
    let s1 = 0;
    let s2 = 0;
    while (s1 < sub.length && s2 < string.length){
        if (sub[s1]=== string[s2]){
            s1 += 1;
            s2 += 1;
            if (s1 === sub.length){
                return true
            }
        }else{
            s2 += 1;
        }
    }
    return false
}


module.exports = isSubsequence;