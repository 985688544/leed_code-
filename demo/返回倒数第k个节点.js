
var kthToLast = function(head, k) {
    let res = []
    let current = head
    while (current) {
        res.unshift(current.val)
        current = current.next
    }
    return res[k-1]
}
const node = {
    val:1,
    next: {
        val: 2,
        next :{
            val: 3,
            next:null
        }
    }
}
/**
 *
 */
kthToLast(node, 2)