/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKthFromEnd = function(head, k) {
   //  let current = head
   //  let pre = null
   //  while (current) {
   //      const next = current.next
   //      current.next = pre
   //      pre = current
   //      current = next
   //  }
   //  let i = 0
   //  let preNext = pre
   //  let val = null
   //  while (preNext) {
   //      i++
   //      preNext = preNext.next
   //  }
   // return  val

    let current = head
    let pre = head
    // 总长度
    let len = 0
    while (current) {
        current = current.next
        len ++
    }
    let preI = 0
    let preTak = null
    while (pre) {
    if (len - preI === k) {
        preTak =  pre
        break
    }
        preI++
        pre = pre.next
    }
    return  preTak
};

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
getKthFromEnd(node, 2)
