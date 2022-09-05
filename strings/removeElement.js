// https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1151/

var removeElement = function (nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
