
var minNumber = function(nums) {
  return nums.sort((a,b)=>{
      const stra=String(a),strb=String(b)
      return (stra+strb)-(strb+stra)
  }).join('')
};
console.log(minNumber([3,4,3,4,3,4,3,4]))