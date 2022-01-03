function lastStoneWeight(stones) {
    if(stones.length ===1)  return stones[0]

    // 升序, 不会出现负数问题
    stones.sort((a, b) => a-b)
    if (stones.length > 1) {
        let num = stones.pop() - stones.pop()
        if (num) stones.push(num)
        return lastStoneWeight(stones)
    }
    return stones.length ? stones[0] :0
}

console.log(lastStoneWeight([2,3,55,6,4,12,2,1,0]))