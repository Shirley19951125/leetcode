
    var majorityElement=function(nums){
        // 计算l-h之间有多少个n
        function getCount(l,h,n){
            let count=0
            for(let i=l;i<=h;i++){
                if(nums[i]==n) count++
            }
            return count
        }
        function major(low,high){
            // 递归终止条件：数组中只有一个数组，出现次数最多的就是这个元素
            if(low==high) return nums[low]
            // 把数组分成两部分
            let mid=(high-low)/2|0+low
            // left，right分别表示左边和右边出现次数最多的元素
            const left=major(low,mid)
            const right=major(mid+1,high)

            if(left==right) return left

            const leftCount=getCount(low,mid,left)
            const rightCount=getCount(mid+1,high,right)
            if(leftCount>rightCount) return left
            else return right
        }
        return major(0,nums.length-1)
    }

    console.log(majorityElement([3,3,2,2,2]))
