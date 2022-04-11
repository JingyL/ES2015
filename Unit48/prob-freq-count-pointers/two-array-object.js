// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let output = {};
    if (arr1.length === 0){
        return {};
    }
    for (let i = 0; i < arr1.length; i++){
        if (i < arr2.length){
            output[arr1[i]] = arr2[i]
        }else{
            output[arr1[i]] = null;
        }

    }
    return output;
}

module.exports = twoArrayObject;