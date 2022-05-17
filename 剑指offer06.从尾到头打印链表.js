var reversePrint = function(head) {
    let res=[]
    while(head){
        res.push(head.val)
        head=head.next
    }
    return res.reverse()
};

var reversePrint=function(head){
    let res=[]
    function visitor(head){
        if(head!==null) {
        visitor(head.next)
        res.push(head.val)}
    }
    visitor(head)
    return res
}