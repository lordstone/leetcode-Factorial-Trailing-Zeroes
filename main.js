/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var i = 5;
    var count = 0;
    while(Math.floor(n / i) >= 1){
        count += Math.floor(n / i);
        i *= 5;
    }
    return count;
};
