/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var min = prices[0];
    var max = 0
    
    for (index = 1; index < prices.length; index++) {
        if(prices[index] - min > max) {
            max = prices[index] - min;
        } else if (prices[index] < min) {
            min = prices[index];
        }
    }
    return max;
    
};