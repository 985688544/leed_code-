/**
 * 环形链表
 * @param head
 */

/**
 * 1、秒杀法
 * 解题思路
 * 除非不报错，报错就是有环
 * @param head
 * @returns {boolean}
 */
function hasCycle(head) {
    try {
        JSON.stringify(head)
    }
    catch {
        return true
    }
    return false
}

/**
 * 2、标记法
 * 解题思路：给遍历过的节点打记号，如果遍历过程中遇到有记号的说明已环
 *
 */

function hasCycle1(head) {
    while (head) {
        if (head.tag) {
            return true
        }
        head.tag = true
        head = head.next
    }
    return false
}

/**
 *  map ，set
 */
function hasCycle2(head) {
    const map = new Map()
    while (head) {
        if (map.has(head)) return true
        map.set(head, false)
        head = head.next
    }
    return false
}

/**
 *  快慢
 */
function cycle3(head) {
    if (!head || !head.next) {
        return  false
    }
    let s1 = head
    let s2 = head.next
    while (s1) {
        if (s1 === s2) return true
        s1 = s1?.next || null
        s2 = s2?.next?.next || null
    }
    return false
}