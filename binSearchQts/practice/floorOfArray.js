const arr = [4, 8, 12, 24, 28, 42];

const x = 25;

// floor means maximum lesser of the target
function floorSearch(arr, x) {
  let end = arr.length - 1;

  let start = 0;
  let res = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(arr[start], arr[mid], arr[end]);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] > x) {
      end = mid - 1;
    } else {
      res = mid; // floor is when arr[mid] < target
      start = mid + 1;
    }
  }
  return res;
}

console.log(floorSearch(arr, x));
