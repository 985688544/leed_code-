/**
 * 换汤不换药，还是前序遍历的思想
 * 定义一个数组
 * 循环遍历所有的子的children
 *
 * @param root
 */
function sortNode(root) {
    const res = new Array()
    const nodeMap = (node)=>{
        if(!node) return
        res.push(node.val)
        for(let i =0; i<node.children.length;i++) {
            nodeMap(node.children[i])
        }
    }
    nodeMap(root)
    return res
}