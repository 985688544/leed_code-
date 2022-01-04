
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b -a)
    return nums[k -1]
};

// 使用堆排序解
/**
 *  什么是大顶堆？ 什么是TopK ？
 *  TopK的概念：只操作栈顶
 *
 *  堆排序的概念： 选择排序，不稳定排序
 *
 *  堆是具有以下性质的完全二叉树：
 *   大顶堆：每个节点的值都 大于或等于 其左右孩子节点的值  注：没有要求左右值的大小关系
 *   小顶堆：每个节点的值都 小于或等于 其左右孩子节点的值。
 *
 *   排序中：
 *   升序： 大顶堆
 *   降序：小顶堆
 *
 *
 *  假如进行堆排序的话
 *  findKthLargest(nums,nums.length)
 *  或者调整一下 let i=nums.length-1;i>=nums.length-k+1;的条件就行
 * @param nums
 * @param k
 */
function findKthLargest(nums, k) {
    // 构建初始堆【自底向上构建， 从最后一个非叶子节点开始】
        let heapSize = nums.length
        buildMaxHeap(nums, heapSize)
    // 将栈顶与末尾元素交换【下沉操作，让栈顶与末尾元素进行交换， 最大值被放在末尾，并且缩小length长度，不参与后面大顶堆的调整】
     // 进行下沉 大顶堆是最大元素下沉到末尾
    for (let i = nums.length -1; i>= nums.length - k +1; i--) {
        swap(nums,0, i)
        --heapSize // 下沉后的元素不参与到大顶堆的调整
        // 是从上到下，从左到右,因为堆顶元素下沉到末尾了，要重新调整这颗大顶堆
        maxHeap(nums, 0, heapSize)
    }
    return nums[0]
    // 构建大顶堆 从底部开始 【接收两个参数， 一个数组源，一个数组length】
    function buildMaxHeap(nums, heapSize) {
        for (let i = Math.floor(heapSize /2) -1; i >= 0; i--) {
            maxHeap(nums, i, heapSize)
        }
    }
}
// 从左向右，自上而下的调整节点 【数组源，大顶堆位置，总长度】重要部分
//
function maxHeap(nums,i, heapSize) {
    // 计算left， right, 根
    let l = i *2 +1
    let r = i* 2 +2
    let largest = i

    // 先从左边开始进行对比 左大于末尾就替换进行交换
   if (l < heapSize && nums[l] > nums[largest]) {
       largest = l
   }
   if (r < heapSize && nums[r] > nums[largest]) {
       largest = r
   }
   // 进行节点调整
   if (largest !== i) {
       swap(nums, i, largest)
       // 叶子节点调整
       maxHeap(nums, largest, heapSize)
   }

}
function swap(nums, i, largest) {
    const x = nums [i]
     nums[i] = nums[largest]
     nums[largest] = x
}
findKthLargest([3,2,1,5,6,4], 2)