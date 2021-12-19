/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

/**
 *  首先判断边界值
 *
 *  注意一点【s goal的值为相等时】我们用到s.length > new Set(goal).size 【new set进行去重】
 *  采用思路保存两个值
 *  遍历字符串s，找出不想等的两个值，
 *  设置两个暂存变量。
 *  暂存a等于遍历s将不等的值进行翻转
 *  暂存b 保存原有顺序的
 *
 *  最后返回 a===b
 * @param s
 * @param goal
 * @returns {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false

    if(s === goal) {
        return s.length > new Set(goal).size
    }

    let a = ''
    let b = ''
    for(let i =0; i < s.length;i++) {
        if(s[i] !== goal[i]) {
            a = s[i] + a
            b += goal[i]

        }
    }
    return a.length === 2 && a === b
};

buddyStrings('ad', 'da')

// @lc code=end

