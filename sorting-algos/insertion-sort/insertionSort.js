const arr = [8, 4, 1, 5, 9, 2];

function insertionSort(arr, n) {
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {}
  }
}

console.log(insertionSort(arr, arr.length));
