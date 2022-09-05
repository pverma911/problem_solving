// First Negative Number in every Window of Size K

function negaSubArr(arr, k, n) {
  let i = 0,
    j = 0;

  while (j < n) {
    if (j - i + 1 === k) {
      while (i < j) {
        if (arr[i] < 0) {
          console.log(arr[i]);
        }
        i++;
        j++;
      }
    } else {
      j++;
    }
  }
}

console.log(
  negaSubArr(
    [12, -1, -7, 8, -15, 30, 16, 28],
    3,
    [12, -1, -7, 8, -15, 30, 16, 28].length
  )
);
