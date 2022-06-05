/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var finalResult = true;
    var stack = [];
    var i = 0, j = s.length - 1;
    if(s.length % 2 > 0) {return false;}
    while(i < s.length / 2 ) {
        switch (s[i]) {
            case '(':
                if(s[j] != ')') {return false};
                break;
            case '[':
                if(s[j] != ']') {return false};
                break;
            case '{':
                if(s[j] != '}') {return false};
                break;
            default:
                break;
        }
        i++;
        j--;
    }
    
    return true;
};