var validateStackSequences = function(pushed, popped) {
    const stk=[] //辅助栈，模拟压入/弹出操作的排列
    let i=0
for(let n of pushed){
    stk.push(n)

    while(stk.length && (stk[stk.length-1]==popped[i])){

        stk.pop()
        i++
    }
}
    return !stk.length
};
console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]))