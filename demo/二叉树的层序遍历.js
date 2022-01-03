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
    const cur = [root]
    const res =[]
    while (cur.length) {
        const temp = []
        for (let i = cur.length; i >0 ; i--) {
            const h = cur.shift()
            temp.push(h.val)
            h.left && cur.push(h.left)
            h.right && cur.push(h.right)
        }
        res.push(temp)
    }
    return  res
};