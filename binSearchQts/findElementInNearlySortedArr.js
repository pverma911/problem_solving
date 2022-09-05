let arr = [5, 10, 30, 20, 40]; // More in copy

let target = 30;

function searchElement(arr, n, target) {
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (mid + 1 <= end && arr[mid + 1] === target) {
      // check if array is out of bonds or not, if not only then do 2nd check
      return mid + 1;
    }
    if (mid - 1 >= start && arr[mid - 1] === target) {
      // check if array is out of bonds or not, if not only then do 2nd check
      return mid - 1;
    }
    if (arr[mid] > target) {
      end = mid - 2; // cauz we checked above for mid + 1/mid -1
    } else {
      start = mid + 2;
    }
  }

  return -1;
}

console.log(searchElement(arr, arr.length, target));
