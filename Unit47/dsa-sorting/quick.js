/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

// function pivot(arr, left = 0, right = arr.length - 1){
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//       };
//     if (arr.length <= 1){
//         return arr
//     }
//     let l = left
//     let r = right
//     let pivotPoint = arr[Math.floor((l+r)/2)]

//     while (l <= r){
//         while (arr[l] < pivotPoint){
//             l++
//         }
//         while (arr[r] > pivotPoint){
//             r--
//         }

//         if(l <= r){
//             swap(arr, l, r)
//             l++
//             r--
//         }
//     }
//     return l
// }

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    console.log(arr)
    return arr;
  }

module.exports = { pivot, quickSort };