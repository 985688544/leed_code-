// 辅助类
class Nodes {
    constructor(el) {
        this.el = el
        this.next = null
    }
}

class ListNode {
    constructor() {
        this.length = 0
        this.head = null
    }
    append(element) { // 向链表添加节点
        let node = new Nodes(element);
        // 如果当前链表为空，则将head指向node
        if (this.head === null) this.head = node
        else {
            let current = this.getElementAt(this.length - 1);
            current.next = node
        }
        this.length ++
    }

    insert(position, el) { // 在链表的指定位置插入节点
        if (position < 0 || position > this.length) return
        let node = new Nodes(el)
        if (position === 0) {
            node.next = this.head
            this.head = node
            console.log(node, 'node!!')
        } else {
            let previous = this.getElementAt(position - 1);
            node.next = previous.next;
            previous.next = node
            console.log('不执行')
        }
        this.length ++
        return true;
    }

    removeAt(position) { // 删除链表指定位置的值并返回
        let current = this.head
        // console.log(current, 'this.head')
        if (position < 0 || position >this.length) return
        if (position === 0) {
           this.head = current.next
        } else {
          const pre = this.getElementAt(position - 1)
            // console.log(pre, 'pre')
            current = pre.next;
            pre.next = current.next
        }

        this.length--
        return current.el
    }
    indexOf (element) { // 在链表中查找给定元素的索引
        let current = this.head // 暂存一个值
        for (let i = 0; i < this.length; i++) {
            current =  current.next
            if (current.el === element) return i
        }
        return false
    }
    getElementAt (position) { // 返回链表中索引所对应的元素
        if (position < 0 || position> this.length) return
        let current = this.head
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        return current
    }

    isEmpty () { // 判断链表是否为空
        if (this.length <=0) {
            return true
        }
        return  false
    }

    size () { // 返回链表的长度
        return this.length
    }

    getHead () { // 返回链表的头元素
        return this.head
    }

    clear () { // 清空链表

    }

    toString () { // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果

    }
}