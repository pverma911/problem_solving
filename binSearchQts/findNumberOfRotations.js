const arr = [11, 12, 15, 18, 2, 5, 6, 8];
let arrLen = arr.length;

// Rotation would be the length of minimum element.

function getRotations(arr, n) {
  let end = arrLen - 1;

  let start = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let prev = (mid - 1 + arrLen) % arrLen;
    let next = (mid + 1) % arrLen;
    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      return mid;
    } else if (arr[mid] <= arr[end]) {
      end = mid - 1;
    } else if (arr[mid] >= arr[start]) {
      start = mid + 1;
    }
  }
}

const res = getRotations(arr, arrLen);

console.log(res);
