var singleNumbers = function(nums) {
    nums.sort((a,b)=>a-b)
    l=nums.length
    for(let i=0;i<l-1;i++){
        if(nums[i]==nums[i+1]){
            nums.splice(i,2)
            i--
            l-=2
        }
    }
    return nums
};
console.log(singleNumbers([4,1,4,6]))
function singleNumbers(nums){
    // 算出数组中所有元素的异或值，就是a，b的异或值
   let ret = nums.reduce((a,b)=>a^b)
   // div表示异或值为1的位，用来划分a，b并把相等的元素都放在同一边
   let div=1
   while((div & ret)===0){
       div<<=1
   }
   // 对两个组分别异或，找到a，b
   let a=0,b=0
   for(let n of nums){
       if((n&div)==0){
           a^=n
       }else{
           b^=n
       }
   }
   return [a,b]
}