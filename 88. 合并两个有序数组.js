var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m,...nums2);
  nums1.sort((a,b=>a-b));
return nums1;
}

var merge = function(nums1, m, nums2, n) {
    let p1=m-1,p2=n-1,tail=m+n-1;
      var cur;
    while(p1>=0||p2>=0){
      if(p1===-1){
          cur=nums2[p2--];
      }
      else if(p2===-1){
          cur=nums1[p1--];
      }else if(nums1[p1]>nums2[p2]){
          cur=nums1[p1--];
      }else{
          cur=nums2[p2--];
      }
      nums1[tail--]=cur;
    }
    return nums1;
  };