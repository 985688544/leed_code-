
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

function swapPairs(head) {
    if (!head || !head.next) return  head
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
}
swapPairs(node)