/**
 * n = 1
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果 可以变为 1，那么这个数就是快乐数。
 *   输入：n = 19
     输出：true
     解释：
     12 + 92 = 82
     82 + 22 = 68
     62 + 82 = 100
     12 + 02 + 02 = 1
 *
 *
 * @param n
 */

// 递归实现
function happyNum(n) {
    if (n < 10) {
        return (n===1 || n===7) ? true :false
    }
    const list = n.toString().split('')
    let num = 0
    for (let i = 0; i < list.length; i++) {
        num+= Math.pow(parseInt(list[i]), 2)
    }
    return  happyNum(num)
}
console.log(happyNum(-222))
