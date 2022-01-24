function selectionSort(arr) {
    for (let i = 0; i<arr.length; i++){
        let curr = arr[i]
        let idx = i
        for (let j = i+1; j<arr.length; j++){
            if (arr[j]<curr){
                curr = arr[j]
                idx = j
            }
        }
        arr[idx] = arr[i]
        arr[i] = curr
    }
    return arr
}

module.exports = selectionSort;