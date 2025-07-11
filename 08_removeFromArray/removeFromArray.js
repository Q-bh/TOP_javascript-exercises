const removeFromArray = function(list, ...args) {
    return list.filter(arg => !args.includes(arg));
};

// Do not edit below this line
module.exports = removeFromArray;
