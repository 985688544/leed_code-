/**
 * @param {TreeNode} root
 * @return {number}
 */

// 普适解法
var countNodes = function(root) {
    if(root === null) return 0
    return countNodes(root.left) + countNodes(root.right) + 1
};

// 根据题特性  完全二叉树
// 首先需要明确完全二叉树的定义：它是一棵空树或者它的叶子节点只出在最后两层，若最后一层不满则叶子节点只在最左侧。
/**
 * 回顾一下满二叉的节点个数怎么计算，如果满二叉树的层数为h，则总节点数为：2^h - 1.二叉数的节点计算方式: 2^h - 1
 *  对left 与right 进行高度统计，得到它们的层数
    1、left == right。
       这说明，左子树一定是满二叉树，因为节点已经填充到右子树了，
       左子树必定已经填满了。所以左子树的节点总数我们可以直接得到，是 2^left - 1，加上当前这个 root 节点，则正好是 2^left。再对右子树进行递归统计。
    2、left != right。
       说明此时最后一层不满，但倒数第二层已经满了，可以直接得到右子树的节点个数。同理，右子树节点 +root 节点，总数为 2^right。再对左子树进行递归查找。
 *
 */

function countNodes(root) {
    if (root === null) return  0
    const left = leveNode(root.left)
    const right = leveNode(root.right)
    if (left === right) {
        return countNodes(root.right) + (1 << left)
    } else {
        return countNodes(root.left) + (1 << right)
    }
}
function leveNode(node) {
    let current = node
    let lev = 0
    while (current!==null) {
        lev++
        current = current.left
    }
    return lev
}