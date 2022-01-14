class Operator {

    constructor(nums) {
        this.nums = nums
    }

    mean() {
        let numsList = this.nums.split(',')
        let sum = 0;
        for (let i = 0; i < numsList.length; i++) {
            sum += parseInt(numsList[i])
        }
        let result = sum /(numsList.length);
        return result
    }

    median() {
        let numsList = this.nums.split(',');
        let newArray = [];
        for (let i = 0; i < numsList.length; i++) {
            newArray.push(parseInt(numsList[i]));
        }
        newArray = newArray.sort();

        let m = Math.floor(newArray.length/2);

        return newArray[m];
    }

    mode() {
        let numsList = this.nums.split(',')
        let dict = {};
        for (let i = 0; i < numsList.length; i++) {
            if (!dict.hasOwnProperty(parseInt(numsList[i]))){
                dict[parseInt(numsList[i])] = 1
            }else{
                dict[parseInt(numsList[i])] += 1 
            }
        }

        let num;
        let count = -1 ;
        let keys = Object.keys(dict)
        for (let i = 0; i < keys.length; i++) {
            if (dict[keys[i]] > count){
                count = dict[keys[i]]
                num =  keys[i]
            }
        }   
        return num    
    }

}

module.exports = Operator;