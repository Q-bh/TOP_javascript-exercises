const reverseString = function(string) {
    try {
        return string[1:];
    } catch (error) {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = reverseString;
