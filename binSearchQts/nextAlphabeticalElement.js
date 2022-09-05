const arr = ["a", "c", "e", "g", "i", "k"];

const x = "e";

// same formula as ceil

// ceil means smalles highest of the target
function floorSearch(arr, x) {
  let end = arr.length - 1;

  let start = 0;
  let res = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(arr[start], arr[mid], arr[end]);
    if (arr[mid] === x) {
      start = mid + 1; // bcauz even if alphabet is found we want search to becontinued from next element, cauz question does not say to include the alpha.
    } else if (arr[mid] > x) {
      res = mid; // ceil is when arr[mid] < target
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
}

console.log(floorSearch(arr, x));
