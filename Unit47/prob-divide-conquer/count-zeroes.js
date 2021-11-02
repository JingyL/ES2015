function countZeroes(arr) {
  let leftIDX = 0;
  let rightIDX = arr.length - 1;
  let result = 0;
  if (arr[0] === 0){
    result = arr.length;
    return result;
  }
 if (arr[arr.length - 1] === 1){
    return result;
  }
  while (leftIDX <= rightIDX) {
    let middleIXD = Math.floor((leftIDX + rightIDX)/2);
    if (arr[middleIXD] === 0 && arr[middleIXD - 1] === 1) {
        result = arr.length - middleIXD
        return result;
    }else if (arr[middleIXD] === 1) {
        leftIDX = middleIXD + 1;
    }else if (arr[middleIXD] === 0) {
        rightIDX =middleIXD - 1;
    }
  }
}

module.exports = countZeroes