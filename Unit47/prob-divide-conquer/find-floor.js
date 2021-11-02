function findFloor(arr, val) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;
    if (arr[0] > val) {
        return -1;
    }
    if (arr[arr.length-1] < val) {
        return arr[arr.length-1];
    }
    while (leftIDX <= rightIDX) {
        let middleIXD = Math.floor((leftIDX + rightIDX) / 2);
        if (arr[middleIXD] < val && arr[middleIXD + 1] > val) {
            return arr[middleIXD];
        } else if (arr[middleIXD] > val) {
            rightIDX = middleIXD - 1;
        } else if (arr[middleIXD] < val) {
            leftIDX = middleIXD + 1;
        }
    }
    return -1;
}

module.exports = findFloor