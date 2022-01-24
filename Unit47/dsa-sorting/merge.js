function merge(arr1, arr2) {
    let arr = []
    let i = 0
    let j = 0
    while (i < arr1.length  && j < arr2.length ){
        if (arr1[i] <= arr2[j]){
            arr.push(arr1[i])
            i += 1
        }else{
            arr.push(arr2[j])
            j += 1
        }
    }
    if (i < arr1.length ){
        for (let k = i; k < arr1.length; k++){
            arr.push(arr1[k])
        }
    }
    if (j < arr2.length ){
        for (let k = j; k < arr2.length; k++){
            arr.push(arr2[k])
        }
    }
    return arr;
    
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort};