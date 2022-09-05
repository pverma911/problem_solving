const arr = [11, 12, 15, 18, 2, 5, 6, 8];
let arrLen = arr.length;
let target = 15;

// We can apply the same method as find Rotations, cauz we know when we do so then on the right/left side of the mid element we can get 2 arrays which will be perfectly sorted.
// Like in this arr, 2 is mid, then from start 2 till 8 there is one sorted array and from before 2 i.e 11-18 we have one sorted array.
// The when we reach mid we do Binary Search on these 2 arrays wherever the ans is not -1 that is the answer

function getElement(arr, n, target) {
  let end = n - 1;

  let start = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let prev = (mid - 1 + n) % n;
    let next = (mid + 1) % n;
    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      let ans1 = binSearch(arr, target, mid, n - 1);
      let ans2 = binSearch(arr, target, 0, mid - 1);

      if (ans1 != -1) {
        return ans1;
      } else if (ans2 != -1) {
        return ans2;
      }

      return -1;
    } else if (arr[mid] <= arr[end]) {
      end = mid - 1;
    } else if (arr[mid] >= arr[start]) {
      start = mid + 1;
    }
  }
}

function binSearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

const res = getElement(arr, arrLen, target);

console.log(res);
