
const _ = require('lodash')
var leastInterval = function(tasks, n) {
    const freq = _.countBy(tasks);
    //
    // // 最多的执行次数
    const maxExec = Math.max(...Object.values(freq));
    // // 具有最多执行次数的任务数量
    let maxCount = 0;
    Object.values(freq).forEach(v => {
        if (v === maxExec) {
            maxCount++;
        }
    })
    // maxExec - 1 是因为重复步骤走到最后一步时！比如A，A，A，A，【这里会变成1个单位时长】B， 所以相当于走3步
    // 公式 （最多执行次数 -1） *（n + 1）+ 最大任务数量 = 调度时间
    return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);
};

// leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)

// const task = ["A","A","A","B","B","B"]
const task = ["A","A","A","A","A","A","B","C","D","E","F","G"]
console.log(leastInterval(task, 2))