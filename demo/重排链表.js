var reorderList = function(head) {
    let current = head
    let res = []
    while(current) {
       const next  = current.next
        current.next = null
        res.push(current)
        current = next
    }

    let [left, right] = [0, res.length - 1]
    while(left < right) {
        if (left + 1 !== right) res[right].next = res[left + 1];
            res[left].next = res[right]
        left++
        right--
    }
    return res[0]
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
reorderList(node, 'node')