function testNode(head) {
    const map = new Map()
    while (head !== null) {
        if (map.has(head)) {
            return head
        }
        map.set(head)
        head = head.next
    }
    return  null
}