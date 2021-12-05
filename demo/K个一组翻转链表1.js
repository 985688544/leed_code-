

function reversGroup(head, k) {
    // 边界值判定
    if (!head) return head
    let a = head
    let b = head
    // 遍历到k位置
    for (let i = 0; i < k; i++) {
        // 不足K个，所以不需要反转
        if (b === null) {
            return head
        } else {
            b = b.next
        }
    }
    // 反转前k个元素
    let headRevers = revers(head, a, b)
    a.next = reversGroup(b, k)
    return headRevers
}

function revers(head, a, b) {
    let pre,cur,nxt
    // a 为head b为下一个
    cur = a
    while (cur !== b) {
        nxt = cur.next
        cur.next = pre
        pre = cur
        cur = nxt
    }
    return pre
}


const node = {
    el: 1,
    next: {
        el: 2,
        next: {
            el: 3,
            next: {
                el: 4,
                next: {
                    el: 5,
                    next: null
                }
            }
        }
    }
}
