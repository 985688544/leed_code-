var deleteNode = function(head, val) {
    const newHead  = new ListNode()
    newHead.next = head
    let node = newHead
    while (node && node.next) {
        if (node.next.val === val) {
            node.next = node.next.next
        }
        node = node.next;
    }
    return newHead.next
};

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
deleteNode(node, 3)
