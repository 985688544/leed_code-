nums = [10,9,2,5,3,7,101,18]

const lengthOfLIS  = function f(nums) {
    if (!nums.length) {
        return
    }
    const dp = Array.from(nums.length).fill(1)
    console.log(dp, 'dp')
    let count= 0
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                console.log()
            }
        }
    }
    console.log(count, 'count')
}

console.log(lengthOfLIS(nums), 'length')