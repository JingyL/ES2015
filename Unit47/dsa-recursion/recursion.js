/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
    if (nums.length === i ) return 1;
    return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
    if (words.length === i) return 0;
    if (words[i].length > longest(words, i + 1)){
        return words[i].length;
    } else {
        return longest(words, i + 1);
    }


}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
    if (str.length - 1 < i) return '';
    return str.charAt(i) + everyOther(str, i + 2);
}

// function everyOther(str) {
//     if (str.length < 2) return str.charAt(0);
//     if (str.length % 2 === 0) {
//         return  everyOther(str.substring(0, str.length - 2)) + str.charAt(str.length - 2);
//     }
//     else {
//         return everyOther(str.substring(0, str.length - 1)) + str.charAt(str.length - 1);
//     }
// }

/** isPalindrome: checks whether a string is a palindrome or not. */

// function isPalindrome(str, i = str.length - 1) {
//     if (i < 0) return '';
//     let newStr = str.charAt(i)+ isPalindrome(str, i - 1);
//     if (newStr === str){
//         return true;
//     }else{
//         return false;
//     }
// }
function isPalindrome(str) {
    if (str.length === 1) {
        return true;
    }
    if (str.length === 2) {
        return str.charAt(0) === str.charAt(1);
    }
    return str.charAt(0) === str.charAt(str.length - 1) && isPalindrome(str.substring(1, str.length - 1));
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
    if (arr.length - 1 < i){
        return -1;
    }
    if (arr[i] === val){
        return i;
    }else{
        return findIndex(arr, val, i + 1);
    }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
    if (i < 0) return '';
    let newStr = str.charAt(i) + revString(str, i - 1);
    return newStr;

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let res = [];
    for (let key in obj){
        if (typeof obj[key] === "string"){
            res.push(obj[key]);
        }else if (typeof obj[key] === "object") {
            res = res.concat(gatherStrings(obj[key]));
        }
    }
    return res;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

 function binarySearch(arr, val) {
    if(arr.length === 1) {
        if (arr[0] === val){
            return 0;
        }else {
            return -1;
        }
    }
    let mid = Math.floor(arr.length/2);
    if(arr[mid] === val){
        return mid;
    }else if(arr[mid] < val){
        let found = binarySearch(arr.slice(mid), val)
        if (found === -1) {
            return -1;
        }else{
            return mid + binarySearch(arr.slice(mid), val)
        }
    }else if(arr[mid] > val)
        return binarySearch(arr.slice(0, mid), val)

}

// function binarySearch(arr, val) {
//     console.log(arr)
//     if (arr.length === 1) {
//         if (arr[0] !== val){
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     }
//     let mid = Math.floor(arr.length / 2);
//     if (arr[mid] === val) {
//         return mid;
//     }
//     else {
//         if (val > arr[mid]) {
//             let found = binarySearch(arr.slice(mid), val);
//             if (found === -1) {
//                 return -1
//             }
//             return mid + binarySearch(arr.slice(mid), val);
//         }
//         else {
//             console.log(mid)
//             return binarySearch(arr.slice(0, mid), val);
//         }
//     }
// }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
