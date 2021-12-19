/**
 * @param {string} s
 * @return {string}
 * 使用栈的思路来进行解题
 * 首先创建一个左括号出现的栈空间， 我们期望可以存储每次左括号对应的一个下标值
 * 使用字符串的方法split 转换为数组
 * 我们判断，每次左括号出现的情况，之后的遍历中就会出现一个对应的闭合时括号，我们找到对应闭合括号时，就将左括号内的元素弹出栈顶
 * 否则就是多余的闭合时括号 进行删除
 *
 * 注意：我们后期可能后出现多余的落单左括号， 我们对左括号栈进行遍历，因为以及存储好了下标值，直接进行删除就可以
 */

var minRemoveToMakeValid = function(s) {
    let left = []
    let task = s.split('')
    for (let i = 0; i < task.length; i++) {
        if (task[i] === '(') {
            left.push(i)
        }
        if (task[i] === ')') {
           if (left.length > 0) {
               left.pop()
           } else  {
               task[i] = ''
           }
        }
    }

    for (let i = 0; i < left.length; i++) {
        task[left[i]] = ''
    }
    return task.join('')
};

let s = "lee(t(c)o)de)"
minRemoveToMakeValid(s)