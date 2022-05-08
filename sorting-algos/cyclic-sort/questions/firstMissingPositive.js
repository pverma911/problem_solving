// https://leetcode.com/problems/first-missing-positive/

let nums = [3, 4, -1, 1];
var firstMissingPositive = function (nums) {
  let i = 0;

  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] > 0 && nums[i] < nums.length && nums[i] !== nums[correct]) {
      swap(nums, i, correct);
    } else {
      i++;
    }
  }

  return getMissingPositive(nums);
};

function swap(nums, i, correct) {
  let temp = nums[i];
  nums[i] = nums[correct];
  nums[correct] = temp;
}

function getMissingPositive(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
}

console.log(firstMissingPositive(nums));
