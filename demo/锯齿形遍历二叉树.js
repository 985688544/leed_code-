
// 题解：
// 同类型的二叉树遍历都可以使用一套思路
// 1、定义一个元组以及数组打印遍历的存储空间，假设为result
// 2、遍历元组，每次弹出头部，并循环处理，可以得到当前层
// 3、将left，right在循环中加入元组，因为元组的长度是动态的，需要定一个一个存储空间，每次清空
// 4、将当前层push到之前定义好的数组中，我们可以做一个计数，每次进入while就给计数 +1，假设它从0开始，我们就得到奇数与偶数，判断奇数或者偶数，判断是否需要在添加的时候进行反转
// 5、返回最早之前定义号的result
var zigzagLevelOrder = function(root) {
    if(!root) return []
    const cur = [root]
    const result = []
    let n = 0
    while(cur.length) {
        const temp = []
        ++n
        for(let i = cur.length; i > 0; i--) {
            const head = cur.shift()
            temp.push(head.val)
            head.left && cur.push(head.left)
            head.right && cur.push(head.right)
        }
        if(n%2 === 0)  {
            result.push(temp.reverse())
        } else {
            result.push(temp)
        }
    }
    return result
};