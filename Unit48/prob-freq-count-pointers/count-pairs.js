// add whatever parameters you deem necessary
function countPairs(nums, target) {
    // [ -1, -2, 0, 1, 2, 3 ]
    // nums.sort((a, b) => a - b);
    // console.log(nums)
    // let count = 0;
    // let left = 0;
    // let right = nums.length - 1;
    // while (left < right){
    //     if (nums[left] + nums[right] === target){
    //         count += 1;
    //         left += 1;
    //         right -= 1;
    //     }else if (nums[left] + nums[right] < target){
    //         left += 1;
    //     }else{
    //         right -= 1;
    //     }
    // }
    // return count;

    let s = new Set(nums);
    let count = 0
    for (let val of nums){
        s.delete(val);
        if (s.has(target - val)){
            count += 1;
        }
    }
    return count;
}

module.exports = countPairs;