const nums = [1, 2, 3, 4, 5];

function firstBad(nums, bad) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + (right - left) / 2;
    if (nums[mid] === bad) {
      return mid;
    } else if (nums[mid] < bad) {
      left = left + 1;
    } else right = right - 1;
  }

  //   if (left !== nums.length && nums[left] === bad) return left;
}

console.log(firstBad(nums, 4));
