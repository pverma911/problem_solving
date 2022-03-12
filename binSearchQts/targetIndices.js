let nums = [1, 2, 5, 2, 3];

let arr = nums.sort();
let target = 2;

var targetIndices = (arr, x) => {
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
};

console.log(targetIndices(arr, target));
