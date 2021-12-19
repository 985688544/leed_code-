/**
 * 假如大于 8 存入 数组中
 * 先求前缀和 【判断如果大于8 的情况， 用前一个值进行累加】， 否则前面的值减1
 * 从前缀和从0开始找 负数下标值
 * 存栈
 * @param hours
 */
const longestWPI = function(hours) {
    // 求前缀和
    let arr = new Array(hours.length + 1).fill(0)
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] > 8) arr[i + 1] = arr[i] + 1
        else  arr[i +1] = arr[i] -1
    }

    // 栈  默认从0开始
    const res = []// 存储下标的栈
    res[0] = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[res[res.length - 1]]) {
            res.push(i)
        }
    }

    let max = 0
    // 倒序找最大值
    for (let i = arr.length - 1; i > max; i--) {
        while (res.length && arr[res[res.length - 1]] < arr[i]) {
            max = Math.max(max, i - res.pop())
        }
    }
    console.log(max, 'max')
    console.log(res, 'res')
    console.log(arr, 'arr')

}

longestWPI(
    [9,9,6,0,6,6,9])