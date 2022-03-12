nums = [555, 901, 482, 1771];

var findNumbers = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i].toString(); // 12

    if (num.length % 2 === 0) {
      count++;
    }
  }
  return count;
};

let result = findNumbers(nums);
console.log(result);
