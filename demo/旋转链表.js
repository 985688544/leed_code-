function cly(head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let n = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        n++;
    }

    let add = n - k % n;
    if (add === n) {
        return head;
    }

    cur.next = head;
    while (add) {
        cur = cur.next;
        add--;
    }

    const ret = cur.next;
    cur.next = null;
    return ret;
}

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
cly(node, 4);
