
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
// DFS
 const hasPathSum = function (root, targetSum) {
    if (!root) {
        return false
    }
    if (root.left === null && root.right ===null) {
        return targetSum === root.val
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum-root.val)
 }

// BFS
const hasPathSum = function(root, targetSum) {
    if (!root) return  false
    // 存储节点总数
    const res = []
    // 存储和
    const tempArr = []
    res.push(root)
    arr.push(root.val)

    while (res.length) {
        const head = res.pop()
        const temp = arr.pop()
        if (head.left ===null && head.right===null && targetSum === temp) {
            return true
        }

        if (head.left) {
            res.push(head.left)
            tempArr.push(temp + head.left.val)
        }
        if (head.right) {
            res.push(head.right)
            tempArr.push(temp + head.right.val)
        }
    }
    return false
};

 root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 hasPathSum(root, targetSum)