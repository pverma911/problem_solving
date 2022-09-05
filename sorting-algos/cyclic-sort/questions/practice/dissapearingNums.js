const arr = [4, 3, 2, 7, 8, 2, 3, 1];
const n = arr.length;

function dissapearingNums(arr, n) {
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

  let pushArr = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== j) {
      pushArr.push(j);
    }
  }
  return pushArr;
}

console.log(dissapearingNums(arr, n));
