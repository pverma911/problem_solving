// Example 1:
// https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1153/
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

var twoSum = function (numbers, target) {
  let len = numbers.length;
  let num = numbers;
  let result;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let number = num[i] + num[j];

      if (number === target) {
        result = [i + 1, j + 1];
      }
    }
  }

  if (result) {
    return result;
  }
  return -1;
};

// console.log(twoSum([2, 7, 11, 15], 9));

// Optimal solution

var twoSum2 = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer <= rightPointer) {
    if (numbers[leftPointer] + numbers[rightPointer] === target) {
      return [leftPointer + 1, rightPointer + 1];
    }

    if (numbers[rightPointer] > target - numbers[leftPointer]) {
      rightPointer--;
      continue;
    }

    if (numbers[leftPointer] < target - numbers[rightPointer]) {
      leftPointer++;
      continue;
    }
  }

  return null;
};

console.log(twoSum2([2, 7, 11, 15], 9));
