let arr = [5, 7, 7, 7, 7, 8, 8, 10];
let target = 7;

function getFirstandLastPosition(arr, target) {
  let ans = [-1, -1];

  ans[0] = binSearch(arr, target, true); // first element of target

  if (ans[0] !== -1) {
    ans[1] = binSearch(arr, target, false); // last element of target
  }

  return ans;
}

function binSearch(arr, target, firstElemSearch) {
  let ans = -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2); // OR (start+end) /2

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      // target === arr[mid]
      ans = mid; // potential answer but could be more. So, continue

      if (firstElemSearch) {
        end = mid - 1; // if searching for first element
      } else {
        start = mid + 1; // if searching for last element
      }
    }
  }
  return ans; // if no mid found then - 1
}

console.log(getFirstandLastPosition(arr, target));
