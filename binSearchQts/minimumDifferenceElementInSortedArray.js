let arr = [2, 3, 6, 8, 10, 15];
let key = 12;

function minSorted(arr, key) {
  let end = arr.length - 1;

  let start = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  const startDiff = Math.abs(arr[start] - key);
  const endDiff = Math.abs(arr[end] - key);

  if (startDiff < endDiff) return startDiff;
  else return endDiff;
}

console.log(minSorted(arr, key));
