/**
 * 动态规划
 状态定义： 设 dp 为一维数组，其中 dp[i]的值代表 斐波那契数列第 ii 个数字 。
 转移方程： dp[i + 1] = dp[i] + dp[i - 1]dp[i+1]=dp[i]+dp[i−1] ，即对应数列定义 f(n + 1) = f(n) + f(n - 1)f(n+1)=f(n)+f(n−1) ；
 初始状态： dp[0] = 0dp[0]=0, dp[1] = 1dp[1]=1 ，即初始化前两个数字；
 返回值： dp[n] ，即斐波那契数列的第 nn 个数字。
 */
function fib(n) {
    // 设置dp
    // 答案需要取模 1e9 + 7。
    const MOD = 1000000007;
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; ++i) {
        p = q;
        q = r;
        r = (p + q) % MOD;
    }
    return r;
}
console.log(fib(1))