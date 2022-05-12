var maxArea = function(height) {
   let left=0,right=height.length-1,result=0
   while(left<=right){
       if(height[left]<=height[right]){
           result=Math.max(result,height[left]*(right-left))
           left++
       }else{
        result=Math.max(result,height[right]*(right-left))
        right--
       }
   }
   return result
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))