var searchRange = function (nums, target) {
      const findLeft = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (nums[mid] >= target) {
            right = mid - 1;  //等于target时，right-1，说明left是正确的索引
          } else {
            left = mid + 1;
          }
        }
        return left;
      }
      if (nums[findLeft(nums, target)] !== target)
        return [-1, -1]
      else
        return [findLeft(nums, target), findLeft(nums, target + 1) - 1]
        // 如果target不在nums中，则返回离target最近的比他大的元素的索引
    };