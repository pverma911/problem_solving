const arr = [2, 3, 5, 2, 9, 7, 1];
let count = 0;

function maxOfSubArr(arr, k) {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < i + k; j++) { // 0, 0 < 0 + 3     1, 1 < 1 + 3
      if (arr[j] === undefined) {
        sum = 0;
        continue;
      }
      sum += arr[j];
    }
    console.log("Only sum ====>", sum);
    if (sum > maxSum) {
      maxSum = sum;
    }
    sum = 0;
    count++;
  }
  return maxSum;
}

console.log(maxOfSubArr(arr, 3));
