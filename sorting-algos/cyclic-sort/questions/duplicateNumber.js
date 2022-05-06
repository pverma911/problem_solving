// https://leetcode.com/problems/find-the-duplicate-number/

// cycle sort

let arr = [1, 3, 4, 2, 4];

function findDuplicate(nums) {
  let i = 0;
  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] !== nums[correct]) {
      let temp = nums[i];
      nums[i] = nums[correct];
      nums[correct] = temp;
    } else {
      i++;
    }
  }
  return nums[nums.length - 1]; // the duplicate number always reaches the end after sorting
}

console.log(findDuplicate(arr));

// [1, 2, 3, 2, 4];
