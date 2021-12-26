/**
 * 思路
 * 分两个存储区，一个大的一个小的
 * 遍历链表，小的到小的，大的到大的
 * 最后链接链表
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 // 链表解法
function partition(head, k) {
    let big = new ListNode(0)
    let small = new ListNode(0)
    const smallHead = small
    const bigHead = big
    while (head!==null) {
        if (head.val< k) {
            small.next = head
            small = small.next
        }else {
            big.next = head
            big = big.next
        }
        head = head.next
    }

    big.next = null;
    small.next = bigHead.next
    return smallHead.next
}
 
 // 数组解法
function f(head, k) {
    const big = []
    const small = []
    while (head){
        const next = head.next
        head.next = null
        if (head.val < k) {
            small.push(head.val)
        }else {
            big.push(head.val)
        }
        head = next
    }

    return transformArr(small.concat(big))
}
function transformArr(arr) {
    const head =  new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
}
const node = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 5,
                    next: {
                        val: 2,
                        next: null
                    }
                }
            }
        }
    }
}
partition(node, 3)