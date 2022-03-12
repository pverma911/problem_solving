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

let res = binSearch(arr, x);
console.log("Result ==>", res);
