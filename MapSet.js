new Set([1,1,2,2,3,4]);
// { 1, 2, 3, 4 } 


[...new Set("referee")].join("");
// {ref}


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/* m = {
    [1,2,3]: true;
    [1,2,3]: false;
}
*/





hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

function hasDupilicate(arr) {
    let newSet = new Set(arr);
    if (newSet.size === arr.length ) {
        return true;
    }
        return false;
}





vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str){
    let eachLetter = Array.from(str);
    let vowel = 'aeiou';
    let map = new Map();
    let count = 1;
    for (let each of eachLetter){
        if (vowel.indexOf(each) !== -1) {
                if (!map.has(each)) {
                map.set(each, count);
            } else {
                count += 1;
                map.set(each, count);
            }
        } 
    }
    return map;
}