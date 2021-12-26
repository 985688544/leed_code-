/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function kthGrammar(n,k) {
    if (n === 1) return 0
    // 求出行的长度
    let leng = Math.pow(2, (n-1))

    // 如果K大于长度的一半，就是K所在位置是后半段
    if (k > leng/ 2){
        // 先得到上一行的值，位置是K相对于后半段的位置
        const res = kthGrammar(n-1, k - leng / 2)
        return res === 0 ? 1 :0
    }else {
        return kthGrammar(n -1, k)
    }
}

// 暴力解法，报错｜｜ 不通过
var kthGrammar = function(n, k) {
    // 最后一行生成的数值
    let str = '0'
    for (let i = 0; i < n; i++) {
        str = transform(str).join('')
    }
    const res =  str.split('')
    return res[k-1]
};

const transform = (s) =>{
    const arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            arr.push('01')
        }else if (s[i] === '1'){
            arr.push('10')
        }
    }
    return arr
}
kthGrammar(3,3)