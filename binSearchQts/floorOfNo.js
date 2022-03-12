const arr = [2, 3, 5, 9, 14, 16, 18];

const target = 15;

let size = arr.length - 1;

const binSearch = (arr, size, target) => {
  let start = 0;

  let end = size;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

let res = binSearch(arr, size, target); // Should be 14

console.log(res);
