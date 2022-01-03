// 解题思路
// 最小堆经常用来求取数据集合中k个值最大的元素，最大堆用来求取数据集合中k个值最小的元素
// 每当从数据流中读出一个数字，就先判断这个新的数字是不是有必要添加到最小堆中
// 如果最小堆中元素的数目还小于k，那么直接将它添加到最小堆中
// 如果新读出的数字小于或等于堆中的最小值，那么堆中的k个数字都比它大，因此它不可能是k个最大的数字中的一个
// 如果新读出的数字大于堆顶的数字，那么堆顶的数字就是第k+1大的数字，可以将它从堆中删除，并将新的数字添加到堆中，
// 这样堆中保存的仍然是到目前为止从数据流读出的最大的k个数字，
// 此时第k大的数字正好位于最小堆的堆顶

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    // 堆大小
    this.size = k;
    this.minHeap = new MinHeap();
    // 把数据都添加到堆中
    for (const x of nums) {
        this.add(x);
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.minHeap.size() < this.size) {
        this.minHeap.offer(val);
    } else if (val > this.minHeap.peek()) {
        this.minHeap.poll();
        this.minHeap.offer(val);
    }
    return this.minHeap.peek();
};
// 最小堆
class MinHeap {
    constructor(data = []) {
        this.data = data;
        this.comparator = (a, b) => a - b;
        this.heapify();
    }
    // 建堆
    heapify() {
        if (this.size() < 2) return;
        // 将每个元素插入，往上冒到合适位置
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }
    // 获得堆顶元素
    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }
    // 往小顶堆中插入元素
    offer(value) {
        this.data.push(value);
        // 在最后的位置插入且向上冒泡
        this.bubbleUp(this.size() - 1);
    }
    // 移除顶堆元素
    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            // 最末尾元素放到堆顶
            this.data[0] = last;
            // 向下调整直至放到合适位置
            this.bubbleDown(0);
        }
        return result;
    }

    bubbleUp(index) {
        while (index > 0) {
            // 获得父节点索引
            const parentIndex = (index - 1) >> 1;
            // 如果要调整的节点比父节点的值还要小，就需要一直往上冒
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                // 交换位置往上冒
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            // 获得要调整的节点的左子节点和右子节点的索引
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            // 如果左/右子节点的值小于当前要调整的节点的值
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            // 则要交换
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }
    // 交换元素
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }
    // 获得堆大小
    size() {
        return this.data.length;
    }
}