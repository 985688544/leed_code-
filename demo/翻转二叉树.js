
function reverseNode(root) {
    const left = root.left
    const right = root.right
    root.left  = right
    root.right = left
    reverse(root.left)
    reverse(root.right)
    return root
}

function reverseNode(root) {
    if (!root) return null
    const tak = [root]
    while (tak.length){
        const cure = tak.unshift()

        const left  =cure.left
        const right = cure.right
        cure.right = left
        cure.left = right

        if (cure.left) {
            tak.push(cure.left)
        }
        if (cure.right) {
            tak.push(cure.right)
        }
    }
    return root
}