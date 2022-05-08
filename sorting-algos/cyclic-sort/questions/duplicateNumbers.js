// https://leetcode.com/problems/find-all-duplicates-in-an-array/

let arr = [4, 3, 2, 7, 8, 2, 3, 1];

function findDuplicates(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;

    if (arr[i] !== arr[correct]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }
  const duplicates = searchDuplicates(arr);

  return duplicates;
}

function swap(arr, i, correct) {
  let temp = arr[i];
  arr[i] = arr[correct];
  arr[correct] = temp;
}

function searchDuplicates(arr) {
  let duplicatesArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      duplicatesArr.push(arr[i]);
    }
  }
  return duplicatesArr;
}

console.log(findDuplicates(arr));
