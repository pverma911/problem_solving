let arr = [5, 7, 7, 8, 8, 10];
let target = 7;

function getFirstAndLast(arr, target) {
  let ans = [-1, -1];

  ans[0] = search(arr, target, true);

  if (ans[0] !== -1) {
    ans[1] = search(arr, target, false);
  }

  //   [ last - first + 1]
  return ans[1] - ans[0] + 1;
}

function search(arr, target, isFirst) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      ans = mid;

      if (isFirst) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return ans;
}

console.log(getFirstAndLast(arr, target));
