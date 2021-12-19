var isValid = function(s) {
    const n = s.length
    if(n % 2 === 1)  return false

    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])

    const task = []
    for(let ch of s) {
        if(pairs.has(ch)) {
            if(!task.length || task[task.length -1] !== pairs.get(ch)) {
                return false
            }
            task.pop()
        } else {
            task.push(ch)
        }
    }
    return !task.length
};
isValid('()[]{}')