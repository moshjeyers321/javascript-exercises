const sumAll = function(...nums) {
    const negative = (el) => el < 0;


    if (nums.some(negative) || nums.some(el => typeof el !== 'number')){
        return "ERROR"
    }
    let max = Math.max(...nums);
    let min = Math.min(...nums);

    let sum = 0;

    for (let i = min; i <=max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
