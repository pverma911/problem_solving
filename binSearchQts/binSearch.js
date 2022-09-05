let arr = [24, 28, 34, 56, 90, 124, 142];

let x = 90;

function binSearch(arr, x) {
  let end = arr.length - 1;

  let start = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(arr[start], arr[mid], arr[end]);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

// let res2 = binSearch(arr, x);
// console.log("Result ==>", res2);

// Binary Search using Recursion:

function recursiveSearch(arr, x, left, right) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === x) {
    return mid;
  } else if (x < arr[mid]) {
    return recursiveSearch(arr, x, left, right - 1);
  } else if (x > arr[mid]) {
    return recursiveSearch(arr, x, left + 1, right);
  }
}

// Binary search on strings

let strArr = ["aaron", "ab", "bo", "clo", "dan", "ed", "fai", "gigi", "jo"];
let str = "ed";

let res = recursiveSearch(strArr, str, 0, arr.length - 1);
console.log("Result ==>", res);
