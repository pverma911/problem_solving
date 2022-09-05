const arr = [4, 0, 2, 1];
const n = arr.length;

function missingNum(arr, n) {
  let i = 0;

  while (i < n) {
    let correct = arr[i]; // cauz 0 se start;

    if (arr[i] < n && arr[i] !== arr[correct]) {
      let temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i++;
    }
  }

  console.log(arr);

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== j) {
      return j;
    }
  }
}

console.log(missingNum(arr, n));
