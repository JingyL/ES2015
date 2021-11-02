function findRotatedIndex(arr, val) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;
    let newIDX;
    // let arrayA = [];
    // let arrayB = [];
    if (arr[0] < arr[rightIDX]) {
        while(leftIDX <= rightIDX) {
            let middleIDX = Math.floor((leftIDX + rightIDX)/2);
            if (arr[middleIDX] === val) {
                return middleIDX;
            }else if (arr[middleIDX] > val) {
                rightIDX = middleIDX - 1;
            }else{
                leftIDX = middleIDX + 1;
            }
        }
        return -1;
    }else{
        while (leftIDX <= rightIDX){
            let middleIDX = Math.floor((leftIDX + rightIDX)/2);
            if (arr[middleIDX] > arr[middleIDX + 1]){
                return newIDX = middleIDX;
            }else if(arr[middleIDX] < arr[middleIDX + 1]){
                if ( arr[middleIDX] > arr[rightIDX] && arr[middleIDX] > arr[leftIDX]) {
                    leftIDX = middleIDX + 1;
                }else if ( arr[middleIDX] < arr[rightIDX] && arr[middleIDX] < arr[leftIDX]){
                    rightIDX = middleIDX - 1;
                }
            }
        }
        if (arr[newIDX] === val) {
            return newIDX;
        }else if (val < arr[rightIDX]) {
            let leftIDX = newIDX + 1;
            let rightIDX = arr.length - 1;
            while (leftIDX <= rightIDX){
                let middleIDX = Math.floor((rightIDX + leftIDX)/2);
                if (arr[middleIDX] === val) {
                    return middleIDX;
                }else if (arr[middleIDX] > val) {
                    rightIDX = middleIDX - 1;
                }else{
                    leftIDX  = middleIDX + 1;
                }
            } 
        }else if (val > arr[0]) {
            let leftIDX = 0;
            while (leftIDX <= newIDX){
                let middleIDX = Math.floor((leftIDX + newIDX)/2);
                if (arr[middleIDX] === val) {
                    return middleIDX;
                }else if (arr[middleIDX] > val) {
                    newIDX = middleIDX - 1;
                }else{
                    leftIDX = middleIDX + 1;
                }
            } 
        }
    
        return -1;
  
    }
}

module.exports = findRotatedIndex