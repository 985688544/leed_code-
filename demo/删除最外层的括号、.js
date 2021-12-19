var removeOuterParentheses = function(s) {
 let  lev = 0;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            lev ++;
            if (lev === 1) {
                continue
            }
        } else {
            lev--;
            if (lev === 0) {
                continue
            }
        }
        res += s.charAt(i);
    }
    console.log(res, 'res')
    return res
};

const s = "(()())(())(()(()))"

removeOuterParentheses(s)