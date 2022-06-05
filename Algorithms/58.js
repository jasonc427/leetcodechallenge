/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    var spacePos = s.trim().lastIndexOf(' ');
    return s.trim().length - spacePos - 1;
};