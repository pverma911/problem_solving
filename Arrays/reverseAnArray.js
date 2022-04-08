let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function startReverse(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    reverseArr(arr, start, end);
    start++;
    end--;
  }
  return arr;
}

function reverseArr(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

console.log(startReverse(arr));
