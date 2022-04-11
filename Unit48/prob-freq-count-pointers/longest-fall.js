// add whatever parameters you deem necessary
function longestFall(nums) {
    let start = 0;
    let res = 0
    if (nums.length === 0){
        return 0;
    }
    for (let i = 1; i < nums.length; i++){
        if (nums[i] < nums[i - 1]){
            res = Math.max(res, i - start + 1)
        }else{
            start = i;
        }
    }
    if(res !== 0){
        return res;
    }else{
        return 1;
    }
}


module.exports = longestFall;