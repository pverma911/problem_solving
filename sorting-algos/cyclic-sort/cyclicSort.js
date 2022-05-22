const arr = [2, 3, 5, 4, 1];

function cycleSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;

    if (arr[i] !== arr[correct]) {
      let temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i++;
    }
  }

  return arr;
}

console.log(cycleSort(arr));
