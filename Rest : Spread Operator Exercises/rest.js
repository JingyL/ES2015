// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }


  const filterOutOdds = (...arguments) => 
  arguments.filter((num)=> num % 2 === 0);


// function findMin(nums) {
//     return nums.reduce(function (min, next) {
//      return min < next ? min : next; 
//     });
// }

const findMin = (...argument) =>
argument.reduce((min, num) => min < num ? min : num);

// function mergeObjects (obj1, obj2) {
//     let newObj = {};
//     newObj = {...obj1, ...obj2};
//     return newObj;
// }

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// function doubleAndReturnArgs (arr, ...num) {
//     let newArray = [];
//     newArray.push(arr);
//     num.map(function (n) {
//         return n * 2;
//     });
//     newArray.push(num);
//     return newArray;
// }



const doubleAndReturnArgs = (arr, ...num) =>
arr.concat(num.map((n) => n * 2));









/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     let randomIdx = Math.floor(Math.random()*items.length);
//     items.splice(randomIdx, 1);
//     return items;
// }

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  



/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {
//     let newArray = [];
//     newArray.push(array1, array2);
//     return newArray;
// }

const extend = (array1, array2) =>
[...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {
//     let newObj = {};
//     newObj = {...obj, [key]: val};
// }

const addKeyVal = (obj, key, val) =>
({...obj, [key]: val});



/** Return a new object with a key removed. */

function removeKey(obj, key) {
    delete obj[key];
    return obj;
}

const removeKey = (obj, key) => {
delete obj[key]
return obj;
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {
//       let newObj = {};
//       newObj = {...obj1, ...obj2};
//       return newObj;

// }

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {
//     let newObj = {};
//      newObj = {...obj, [key]:val};
//      return newObj;

// }

const update = (obj, key, val) => 
({...obj, [key]:val});


