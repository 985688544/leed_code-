// 快速排序
function sortArr(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let min = []
    let max = []
    // 每次从中间分区
    const len = Math.floor(arr.length / 2)
    // 基准值
     const  p = arr.splice(len, 1)[0]
    // 排序时候，小值放到min，大的放max
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > p){
           max.push(arr[i])
        }else {
            min.push(arr[i])
        }
    }
    return sortArr(min).concat(p, sortArr(max))
}


console.dir(sortArr([3,5,6,7,8,83,3,4, 1]).splice(0, 3))