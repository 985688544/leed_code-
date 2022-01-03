const root = {
    val: 5,
    left: {
        val: 1,
        left: {
            val:2,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 1,
        left: {
            val: 2,
            left: {
                val: 3,
                left: null,
                right: {
                    val: 4,
                    left: null,
                    right: null
                }
            },
            right: null
        },
        right: null
    }
}

/**
 * 维护一个元数组，并期望每次向它添加每层的遍历结果
 * 元数组的形式为[[节点，层数量]]
 *
 * @param root
 */
function f(root) {
    // 维护一个元数组
    const queue = [[root, 0]]
    // 维护一个最大总数
    let res = 1
    while (queue.length) {
        // 取出最早之前的数量
        const cur = queue[0][1]
        const len = queue.length
        for (let i = 0; i < len; i++) {
            // 保持新鲜数组
            let [h, pops] = queue.shift()
            // 对left，right进行分别判断
            if (root.left) queue.push([h.left, (pops - cur) * 2])
            // 在right的情况，考虑到left
            if (root.right) queue.push([h.right, (pops - cur) * 2 +1])
            // 对比当前层与之前的总数 取最大值
            res =  Math.max(res, pops - cur + 1)
        }
    }
}