/**
 * 思路
 * 1、创建一个根节点
 * 2、每次从前序的头找出根节点在中序遍历中所在的位置，中序的左为左节点，右边为右节点
 * 3、对左右节点进行递归
 * @param preorder
 * @param inorder
 */
let buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    // 创建根节点
    const node = new TreeNode(preorder[0])

    // 从前序遍历中的头找出下标
    const index = inorder.indexOf(preorder.shift())

    //左右子树递归
    node.left = buildTree(preorder, inorder.slice(0, index))
    node.right = buildTree(preorder, inorder.slice(index + 1))

    return node
}

// 延伸 从中序与后序遍历序列构造二叉树
let buildTree = function (inorder, nextOrder) {
    if (!inorder.length || !nextOrder.length) return null

    // 创建根节点
    const node = new TreeNode(nextOrder.pop())

    // 找下标
    const index = inorder.indexOf(node.val)

    node.right = buildTree(inorder.slice(index + 1), nextOrder.slice(index))
    node.left = buildTree(inorder.slice(0, index), nextOrder.slice(0, index))

    return node
}
