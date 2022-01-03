/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    // 递归三部曲
    const task = (root) =>{
        if(root === null){
            return 0;
        }
        // 求出左子树的高度
        const leftDepth = task(root.left)
        if (leftDepth === -1) {
            return -1
        }
        const rightDepth = task(root.right)
        if (rightDepth === -1) {
            return -1
        }
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1
        }else {
            return 1 + Math.max(leftDepth, rightDepth)
        }
    }
    return task(root) === -1 ? false :true
};