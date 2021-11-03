function sortedFrequency(arr, target) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;
    let rPivotPoint;
    let lPivotPoint;
    // if arr's number are all the same
    if (arr[leftIDX] === arr[rightIDX]) {
        if (arr[leftIDX] === target) {
            return arr.length;
        } else {
            return -1;
        }
    } else {
        // find pivot points
        // if the first is target
        // if the last is target
        if (arr[0] === target) {
            lPivotPoint = 0;
            rPivotPoint = findRightPP(arr, target, 0, arr.length - 1);
        } else if (arr[arr.length - 1] === target) {
            lPivotPoint = findLeftPP(arr, target, 0, arr.length - 1);
            rPivotPoint = arr.length - 1;
        } else {
            rPivotPoint = findRightPP(arr, target, 0, arr.length - 1);
            console.log("r" + rPivotPoint);
            lPivotPoint = findLeftPP(arr, target, 0, arr.length - 1);
            console.log("l" + lPivotPoint);
        }
        // return result
        if (rPivotPoint === -1 && lPivotPoint === -1) {
            return -1;
        } else if (lPivotPoint === -1 && rPivotPoint !== -1) {
            let result = rPivotPoint + 1;
            return result;
        } else {
            let result = rPivotPoint - lPivotPoint + 1;
            return result;
        }
    }

}

// function to find left and right PP
function findLeftPP(arr, target, leftIDX, rightIDX) {
    while (leftIDX <= rightIDX) {
        let middleIDX = Math.floor((leftIDX + rightIDX) / 2);
        if (arr[middleIDX] > arr[middleIDX - 1] && arr[middleIDX] === target) {
            lPivotPoint = middleIDX;
            return lPivotPoint;
        } else if (arr[middleIDX] < target) {
            leftIDX = middleIDX + 1;
        } else if (arr[middleIDX] >= target) {
            rightIDX = middleIDX - 1;
        }
    }
    return -1;
}

function findRightPP(arr, target, leftIDX, rightIDX) {
    while (leftIDX <= rightIDX) {
        let middleIDX = Math.floor((leftIDX + rightIDX) / 2);
        if (arr[middleIDX] < arr[middleIDX + 1] && arr[middleIDX] === target) {
            rPivotPoint = middleIDX;
            return rPivotPoint;
        } else if (arr[middleIDX] <= target) {
            leftIDX = middleIDX + 1;
        } else if (arr[middleIDX] > target) {
            rightIDX = middleIDX - 1;
        }
    }
    return -1;
}

module.exports = sortedFrequency