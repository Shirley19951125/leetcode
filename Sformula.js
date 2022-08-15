function TreeNode(value,children){
    this.value=value || null
    this.children=children || []
}
function calculate(s){
   let root = toTree(s)
   return inorder(root)
}
function inorder(node){
    if(node.children.length===0) return node.value
    let res=''
    for(let i=0;i<node.children.length;i++){
     res+=inorder(node.children[i])+node.value
    }
    res=res.slice(0,res.length-1)
    return eval(res)
}
function toTree(s){
    let reg1=/\(/,reg2=/^\d+$/,reg3=/\)/
    let arr=s.split(' ')
    let root=new TreeNode(arr[0][1])
    let stk=[root]
    for(let i=1;i<arr.length;i++){
        if(reg1.test(arr[i])){
            let node= new TreeNode(arr[i][1])
            stk[stk.length-1].children.push(node)
            stk.push(node)
        }else if(reg2.test(arr[i])){
            let node= new TreeNode(arr[i])
            stk[stk.length-1].children.push(node)
        }else if(reg3.test(arr[i])){
            let node= new TreeNode(parseInt(arr[i]))
            stk[stk.length-1].children.push(node)
            stk.pop()
            arr[i]=arr[i].slice(0,arr[i].length-1)
            while(reg3.test(arr[i])){
                stk.pop()
                arr[i]=arr[i].slice(0,arr[i].length-1)
            }
        }
    }
    return root
}
console.log(calculate('(* (- (* (+ 2 3) 5) 9 1) 2)'))
console.log(calculate('(+ (* (- 300 (- 90 12 3) 1 2 3) 12 2) 1)'))
console.log(calculate('(- 890 18 23 (* 1 2 3 (+ 1288 32)))'))