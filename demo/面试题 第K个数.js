// 动态规划 优
function f(k) {
    // 存储区
    const dp = new Array(k + 1).fill(1)
    console.log(dp, 'dp')
    // 素因子值
    let p3 =1, p5 =1, p7 = 1
    // 直接默认为1，所以从2开始
    for (let i = 2;i <=k;i++) {
        const num3 = dp[p3] * 3,
            num5 = dp[p5] * 5,
            num7 = dp[p7] * 7
        dp[i] = Math.min(num3, num5, num7);

        // 去重
        if (dp[i] === num3) p3++
        if (dp[i] === num5) p5++
        if (dp[i] === num7) p7++
    }
    return dp[k]
}
// 劣
function f1(k) {
    const dp = new Array(k)
    let p3 = 0
    let p5 = 0
    let p7 = 0
    dp[0] = 1
    for (let i = 1; i<k; i++) {
      dp[i] =  Math.min(dp[p3]*3, Math.min(dp[p5] * 5, dp[p7]* 7))
        console.log(dp[i], 'dp[i]')
        if (dp[i] === dp[p3] *3) p3++
        if (dp[i] === dp[p5] *5) p5++
        if (dp[i] === dp[p7] *7) p7++
    }
    console.log(dp, 'dp')
    return dp[k -1]
}
f1(5)