let nums = [1,0,1,1,0,1]

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1 && nums[i + 1] !== 0) {
      count++;
    }
  }
  return count;
};

let result = findMaxConsecutiveOnes(nums);
console.log(result);
