/**
 * 假设整棵树都被覆盖
 * 假设1：如果在root处安装摄像头的话，那么left，right也一定可以被监控到，此外保证left与right的子节点也可以被监控
 * 假设2：如果root未安装摄像头的话，那么left与right其中一必须安装有摄像头
 *
 * 状态 a：root 必须放置摄像头的情况下，覆盖整棵树需要的摄像头数目。
 * 状态 b：覆盖整棵树需要的摄像头数目，无论root 是否放置摄像头。
 * 状态 c：覆盖两棵子树需要的摄像头数目，无论节点root 本身是否被监控到。
 *
 * 对于root节点，我们设其左右left与right 的变量为 {la,lb,lc} 与 {ra, rb,rc}
 *
 * 从而得出求解a，b
 * a  = lc + rc + 1 // 需要的总数目
 * b = min(a, min(la+ ra, lb +rb))
 *
 */

// 后序
function f(root) {
    const dfs = (root) =>{
        if (!root) return 0
        const [la,lb,lc] = dfs(root.left)
        const [ra, rb, rc] = dfs(root.right)
        const a = lc + rc +1
        const b = Math.min(a, Math.min(la+ rb, lb+ ra))
        const c = Math.min(b, lb + rb)
        return [a, b, c]
    }
    return dfs(root)[1]
}
f()
