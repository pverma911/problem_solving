// Find the maximum number in the array from where the array starts decreasing

let arr = [1, 2, 3, 5, 7, 6, 3, 2, 1];

function findPeak(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) {
      // you are in decreasing part of arr, this may be the answer but look at left as well, this is why end != mid - 1 as it may be the answer
      end = mid;
    } else {
      // you are in increasing part of arr, look at right side of the array
      start = mid + 1; // because we know that mid+1 element > mid element
    }
  }
  // in the end, start == end and pointing to the largest number because of the 2 checks above
  // start and end are always trying to find max element in the above 2 checks
  // hence, when they are pointing to just one element, that is the max one because that is what the checks say
  // more elaboration: at every point of time for start and end, they have the best possible answer till that time
  // and if we are saying that only one item is remaining, hence cuz of above line that is the best possible ans
  return start;
}

console.log(findPeak(arr));
