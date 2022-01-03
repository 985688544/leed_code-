/**
 * @param A
 * @param B
 */
function isSubStructure(A, B) {
    // 题目要求的约定空树不是任意一个树的子结构，也就是说A B两颗树中任一一颗是空树则返回false
    if (!A || !B) return false
    return someNode(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function someNode(a, b) {
    // 一直找到子树b为空都没有发现a.val !== b.val的情况，那么就确定确实存在这颗子树了
    if (b ===null){
        return true
    }
    // 如果找到a没有节点可查了， b还有，必然不是a的子节点
    if (a ===null) {
        return false
    }
    // 如果值不同， 必然不是子节点
    if (a.val !== b.val){
        return false
    }
    // 查找整棵树
    return someNode(a.left, b.left) && someNode(a.right, b.right)
}