function replaceNode(head, k) {
    let res = new Array(k).fill(0)
    const arr = []
    // 链表断开
    while (head) {
        const next = head.next
        head.next = null
        arr.push(head.val)
        head = next
    }
    let num
    console.log(arr.length / k)
    console.log(arr.length & k)
    // console.log(k ,'k')
    // console.log(arr, 'arr')
    // console.log(res, 'res')
}
const node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
replaceNode(node, 3)