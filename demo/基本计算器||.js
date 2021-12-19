/**
 * 计算器解题思路
 * 将所有运算转换为加法运算
 * 遇到乘除直接处理， 减号转换为负数
 *
 * @param s
 */
var calculate = function(s) {
    s = s.trim()
    let pask = new Array()
    let n = s.length
    let num = 0
    let preSign = '+'
    for (let i = 0; i < n; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num =  num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if (isNaN(Number(s[i]))  || i === n - 1) {
            switch (preSign) {
                case "+":
                    pask.push(num)
                    break;
                case "-":
                    pask.push(-num)
                    break;
                case '*':
                    pask.push(pask.pop() * num)
                    break;
                default:
                    pask.push(pask.pop() / num | 0)
                    break;
            }
            preSign = s[i]
            num = 0
        }
    }
    let ans = 0
    while (pask.length) {
        ans += Number(pask.pop())
    }
    return ans
}
calculate("42")