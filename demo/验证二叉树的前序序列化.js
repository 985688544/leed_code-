/**
 *
 */

var isValidSerialization = function(preorder) {
    // 栈空间的总槽数
    const n = preorder.length;
    // 当前指针
    let i = 0;
    // 剩余槽数
    let slots = 1;
    // 三种情况，逗号代表空，#号代表最后节点，数字
    while (i < n) {
        if (slots === 0){
            return false
        }
        if (preorder[i] === ',') {
            ++i
        }else if (preorder[i] === '#') {
            -- slots;
            ++ i;
        } else { // 数字情况
            while ( i < n && preorder[i] !== ',')  {
                ++i
            }
            ++slots
        }
    }
    return slots === 0
}