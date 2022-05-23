// var twoSum = function(nums, target) {
//     const map={}
//     for(let n of nums){
//         if(typeof map[target-n]==='undefined') map[n]=n
//         else{
//             return [target-n,n]
//         }

//     }
// };
console.log(twoSum([2,7,11,15],9))
function twoSum(nums,target){
    let i=0,j=nums.length-1
    while(i<j){
       let sum=nums[i]+nums[j]
       if(sum===target) return[nums[i],nums[j]]
       if(j>0 && sum>target) j--
       if(i<nums.length-1 && sum<target) i++
    }
    return []
}