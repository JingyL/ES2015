// add whatever parameters you deem necessary
function averagePair(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right){
        let mid = (nums[left] + nums[right]) / 2;
        if (mid === target){
            return true;
        }else if (mid > target){
            right -= 1;
        }else{
            left += 1;
        }
    }
    return false;
}

module.exports = averagePair;