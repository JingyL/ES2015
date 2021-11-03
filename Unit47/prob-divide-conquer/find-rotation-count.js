function findRotationCount(arr) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;
    let newIDX;
    if (arr[0] < arr[rightIDX]) {
        return 0;
    } else{
        let result;
        newIDX = findPivotPoint(arr, leftIDX, rightIDX);
        result = countNumber(newIDX);
        return result;
    }
}

function findPivotPoint(arr, leftIDX, rightIDX) {
    while (leftIDX <= rightIDX) {
        console.log(leftIDX, rightIDX);
        let middleIDX = Math.floor((leftIDX + rightIDX) / 2);
        if (arr[middleIDX] > arr[middleIDX + 1]) {
            newIDX = middleIDX;
            return newIDX;
        } else if (arr[middleIDX] < arr[middleIDX + 1]) {
            if (arr[middleIDX] > arr[rightIDX] && arr[middleIDX] > arr[leftIDX]) {
                leftIDX = middleIDX + 1;
            } else if (arr[middleIDX] < arr[rightIDX] && arr[middleIDX] < arr[leftIDX]) {
                rightIDX = middleIDX - 1;
            }
        }
    }
}


function countNumber(newIDX) {
    let result;
    result = newIDX + 1;
    console.log(result)
    return result;
}

module.exports = findRotationCount