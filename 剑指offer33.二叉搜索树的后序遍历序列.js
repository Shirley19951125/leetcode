var verifyPostorder = function(postorder) {
    function post(l1,l2){
        if(l1>=l2) return true
        let m=l2
        for(let i=l1; i<l2; i++ ){
            if(postorder[i]>postorder[l2]){
                m=i
                break
            }
        }
        for(let i=m ;i<l2;i++){
            if(postorder[i]<postorder[l2]) return false
        }
        return post(l1,m-1) && post(m,l2-1)
    }
   return post(0,postorder.length-1)
};
console.log(verifyPostorder([1,2,3,6,2,5]))