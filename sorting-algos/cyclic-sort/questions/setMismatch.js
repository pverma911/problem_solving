// https://leetcode.com/problems/set-mismatch/

let nums = [2, 1, 4, 2, 6, 5];

var findErrorNums = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] !== nums[correct]) {
      swap(nums, i, correct);
    } else {
      i++;
    }
  }
  let error = getErrors(nums);
  return error;
};

function swap(nums, i, correct) {
  let temp = nums[i];
  nums[i] = nums[correct];
  nums[correct] = temp;
}

function getErrors(nums) {
  let error = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      error.push(nums[i], i + 1);
    }
  }
  return error;
}

console.log(findErrorNums(nums));
