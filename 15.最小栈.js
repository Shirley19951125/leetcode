function MinStack(){
    this.stk=[]
    this.minStk=[]
}
MinStack.prototype.push=function(x){
    this.stk.push(x)
    if(!this.minStk.length || this.minStk[this.minStk.length-1]>x){
        this.minStk.push(x)
    }else{
        this.minStk.push(this.minStk[this.minStk.length-1])
    }
}
MinStack.prototype.pop=function(){
    this.stk.pop()
    this.minStk.pop()
}
MinStack.prototype.top=function(){
    return this.stk[this.stk.length-1]
}
MinStack.prototype.getMin=function(){
    return this.minStk[this.minStk.length-1]
}