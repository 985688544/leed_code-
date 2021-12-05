
function revers(head, left, right) {
    // 设置dummyNode 是这一类问题的一般做法
    const dummyNode = new ListNode(-1)
    dummyNode.next = head
    let pre = dummyNode
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    const cur = pre.next
    for (let i = 0; i < right - left; ++i) {
        const next = cur.next
        cur.next = next.next
        next.next = pre.next
        pre.next = next
    }
    console.log(dummyNode.next)

    return dummyNode.next
}

/**
 *  首先 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
 *  1、从虚拟头节点走 left - 1步 ， 来到left节点的前一个节点 【建议写在for循环里】
 *  2、从pre再走right - left + 1 步，来到right节点的前一个节点
 *  3、切断出一个子链表（截取链表）
 *      ⚠️切断链接
 *  4、反转链表的区间
 * @param head
 * @param left
 * @param right
 */
function revers1(head, left, right) {
    // 创建一个虚拟头节点,因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
    const  dummyNode = new ListNode(-1)
    dummyNode.next = head

    // step1
    let pre = dummyNode
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }
    // step2
    let rightNode = pre
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }

    // step3
    let leftNode = pre.next
    let curr = rightNode.next;

    // ⚠️
    pre.next = null;
    rightNode.next = null;

    // step4
    reverseList(leftNode)

    // step5
    pre.next = rightNode
    leftNode.next = curr;
    return dummyNode.next
}
 function reverseList() {

 }
revers1([1,2,3,4,5], 2,3)