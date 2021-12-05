/**
 * 解题思路
 * 分成K个一组，分别反转
 * 转换为数组，对数组进行分组， 并进行翻转，组合成一个二维数组
 * 然后对其展开，再将数组转换为链表
 * @param a
 * @param b
 */
function reverse(head, k) {
    if (!head) return false
    const arr = transformArray(head)
    const scope = []
    let len = 0
    let tag = null
    for (let i = 0; i < arr.length; i++) {
        ++len
        if (len % k === 0) {
            tag = len
            const cloneA = JSON.parse(JSON.stringify(arr))
            const a = cloneA.splice(i-k +1 ,k)
            scope.push(a.reverse())
        }
    }
    const list = scope.concat(arr.slice(tag))
    const res = []
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === 'object') {
            for (let j = 0; j < list[i].length; j++) {
                res.push(list[i][j])
            }
        }else {
            res.push(list[i])
        }
    }
    return transformCy(res)
}
// 数组转链表
function transformCy(arr) {
    if (!arr.length) {
        return
    }
    let node
    const head = {
        el: arr[0],
        next: null
    }
    let pNode = head
    for (let i = 0; i < arr.length; i++) {
        node = {
            el: arr[i],
            next: null
        }
        pNode.next = node
        pNode = node
    }
    console.log(head)
    return head
}

// 递归链表转数组
function transformArray(head) {
    if (!head) {
        return []
    }
    const res = [head.el]
    const restValues = transformArray(head.next)
    return res.concat(restValues)
}