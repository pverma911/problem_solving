// https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1154/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }

  return sum;
};

console.log(arrayPairSum([2924, -2840, -7942, 5602]));
