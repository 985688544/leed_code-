function levelOrder(root) {
    if (!root) return []
    // 定义一个元数组
    const cur = [root]
    // 定义一个存储节点的list
    const res = []
    // 对元组进行遍历
    while (cur.length) {
        const temp = []
        for (let i = cur.length; i > 0; i--) {
            // 弹出头部
            const node = cur.shift();
            temp.push(node.val)

            if (node.left) {
                cur.push(node.left)
            }
            if (node.right) {
                cur.push(node.right)
            }
        }
        res.push(temp)
    }
    return res
}