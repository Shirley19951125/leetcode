var CQueue = function() {
    this.instack=[]
    this.outstack=[]

};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.instack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.outstack.length){
        return this.outstack.pop()
    }else if(this.instack.length){
    while(this.instack.length){
        this.outstack.push(this.instack.pop());
    }
        return this.outstack.pop()
    }else
    return -1
};
