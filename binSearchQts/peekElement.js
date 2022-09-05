const arr = [5, 20, 25, 28, 10, 24]; // could be unsorted, can return first peek not necessarily largest peak

function getPeek(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid > 0 && mid < arr.length - 1) {
      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[mid] < arr[mid - 1]) {
        end = mid - 1;
      } else start = mid + 1;
    } else if (mid === 0) {
      if (arr[mid] > arr[mid + 1]) {
        return mid;
      } else return mid + 1;
    } else if (mid === arr.length - 1) {
      if (arr[mid] > arr[mid - 1]) {
        return mid;
      } else return mid - 1;
    }
  }
}

console.log(getPeek(arr));
