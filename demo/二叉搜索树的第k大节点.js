/**
 * 使用广度优先遍历
 * @param root
 * @param k
 */
var kthLargest = function(root, k) {
    const mapList = (node) =>{
        if (!node) return 0
        const left =  mapList(node.left)
        if(0 === --k){
            return node.val;
        }
        const right =  mapList(node.right)
        return right +left
    }
    return mapList(root)
};

// 传统解法
function kthLargest(root, k) {
    const res = []
    const mapNode = (cur)=>{
        if(!cur) return
        mapNode(cur.left)
        res.push(cur.val)
        mapNode(cur.right)
    }
    mapNode(root)
    return res.reverse() [k-1]
}
/**
 * 这道题传统的做法是采用中序遍历，用数组存储二叉树的每一个节点，时间复杂度和空间复杂度都是：O(N)（N 为节点的数量）
 * 可以利用二叉搜索树的性质（所有左子节点的值都小于当前根节点，所有右子节点的值都大于当前根节点。），对以上算法进行优化。
    中序遍历是从小到大获取节点的值，并记录，因此需要遍历完整棵树。如果以相反，即 右 -> 根 -> 左 从大到小的顺序遍历获取，
    就无需遍历完整棵树，并且可以使用一个单独的变量记录已遍历了的前 K 个最大值，代码如下
 * 逆中序遍历
 */
function kthLargest(root, k) {
    const res = []
    let count = 0
    let cur = root
    while (cur || res.length) {
        while (cur) {
            res.push(cur)
            cur = cur.right
        }
        const node = res.pop();
        if (++count === k)  return node.val
        if (node.left) cur = node.left
    }
    return  0
}