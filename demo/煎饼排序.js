/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    let ans = [], max
    while (arr.length > 1) {
        max = getMaxIdex(arr)
        max > 0 && ans.push(max + 1)
        reverse(arr, max)
        reverse(arr, arr.length - 1)
        ans.push(arr.length)
        arr.pop()
    }
    return ans
};

// 先翻转 0 - index项
function reverse(arr, index) {
    // 边界判断
    if(index < 1) return
    // 暂存两个下标值
    let i = 0
    let j = index
    // 使用数组的解构赋值进行位置交换
    while(i< j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
}
// 寻找最大数
function getMaxIdex(arr) {
    let max = 0
    for(let i =0 ;i<arr.length;i++) {
        if(arr[i] > arr[max]) {
            max = i
        }
    }
    return max
}
// @lc code=end

