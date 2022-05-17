var MinStack = function() {
    this.stk=[]
    this.minStack=[]
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stk.push(x);
    if(!this.minStack.length || x<this.minStack[this.minStack.length-1]){
        this.minStack.push(x)
    }else{
        this.minStack.push(this.minStack[this.minStack.length-1])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stk.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk[this.stk.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length-1]
};