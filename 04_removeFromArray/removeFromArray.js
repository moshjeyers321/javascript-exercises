const removeFromArray = function(arr, ...args) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (args.includes(element)){
            continue;
        }
        newArr.push(element);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
