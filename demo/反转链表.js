/**
 *  链表反转
 */

/**
 *  解题思路
 *  先保存一个当前头cur
 *  遍历cur
 *  将指针指向
 * @param head
 */

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

/**
 * 暂存current ，不影响head
 * 定义一个存储区
 * 遍历current
 * 每一次保存当前指针的next以及后面的next 【next】
 * 清除当前指针的next
 * 被清除后的current只剩余当前节点，赋值到pre中，
 * 再将之前存好的所有next重新存到current，
 * 直到current没有值为止
 *
 * 思路采取递减法，保存当前指针，将剩余所有next存储，然后将当前值赋值完毕之后，再将之前暂存的值归还
 * @param head
 * @returns {null}
 */
function reverse(head) {
    let current = head
    let pre = null
    while (current) {
         const next = current.next
         current.next = pre
         pre = current
         current = next
    }
        return pre
}

console.dir(reverse(node), {
    depth: 100
})
// class Node {
//     constructor(element){
//         this.el = element
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor() {
//     this.head = null
//     this.length = 0
//     }
//
//     append(element) {
//         let node = new Node(element)
//         // 处理当链表为空的情况,直接将创建的节点指向指向为head
//         if (this.head === null) {
//             this.head = node
//         } else {
//             // 找到链表最尾端
//           let current = this.getNode(this.length - 1)
//             current.next = node
//         }
//         this.length ++
//     }
//     insert(position, element) {
//         let node = new Node(element)
//         // 处理边界问题
//         if (position >= this.length || position < 0) {
//             return
//         }
//         // 假如插入位置为0， 直接将node的next指向head， 并把head同步为node
//         if (position === 0) {
//             node.next = this.head
//             this.head = node
//         }else {
//             // 同append一样找到链表的最尾端
//             let pre = this.getNode(position - 1)
//             // 同步尾端的next与要插入的node的next
//             node.next = pre.next
//             // 将尾端的next指向我们要插入的node
//             pre.next = node
//         }
//         this.length++
//     }
//     getNode(index) {
//         // 处理边界值问题
//         if (index < 0  || index > this.length) {
//             return
//         }
//         // 保存当前的head指针
//         let current = this.head
//         // 遍历当前的一个长度，改变指针到尾端
//         for (let i = 0; i < index; i++) {
//             current = current.next
//         }
//         return current
//     }
//     remove(position) {
//         let current = this.head
//         // 处理边界值问题
//         if (position < 0 || position >= this.length) return
//         // 当下标位置为0的时候，直接将head指向current的next
//         if (position === 0) {
//             this.head = current.next
//         } else {
//             // 找到要删除的前一位
//             const pre = this.getNode(position - 1)
//             // 保存要删除的next以及下面的next
//             current = pre.next;
//             // 将要删除的next 指向被删除的前一位的next
//             pre.next = current.next
//         }
//         this.length--
//     }
//     indexOf(position) {
//
//     }
//     clear() {
//
//     }
//
// }
