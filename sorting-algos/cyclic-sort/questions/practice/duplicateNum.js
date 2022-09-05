const arr = [5, 1, 4, 1, 3, 2];
const n = arr.length;

function duplicateNum(arr, n) {
  let i = 0;

  while (i < n) {
    let correct = arr[i] - 1; // cauz 0 se start;

    if (arr[i] < arr.length && arr[i] !== arr[correct]) {
      let temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i++;
    }
  }

  console.log(arr);

  return arr[n - 1];
}

console.log(duplicateNum(arr, n));
