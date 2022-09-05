// https://leetcode.com/problems/missing-number/

let start = 0;
let end = 9;
let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // [0-9]
// case 2: [8, 6, 4, 2, 3, 5, 7, 0, 1]

// without cycleSort:
function missingNum(start, end, arr) {
  let missing;
  for (let i = start; i <= end; i++) {
    if (arr.indexOf(i) === -1) {
      missing = i;
    }
  }
  return missing;
}

console.log(missingNum(start, end, arr));

// with cycleSort

function missingNumCyclic(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i]; // As array is starting from 0, so correct is arr[i] - 1
    if (arr[i] < arr.length && arr[i] !== arr[correct]) {
      // arr[i] should be less than the length of array or else it won't be swaped as that position in array won't exist, e.g. arr[i] = 9, but there is no 9th index
      let temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i++;
    }
  }

  // finally compare the nums with index, so finally arr[i] == 9 !== i which is 8 then that is the index of correct answer,
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }

  // case 2 if last element of array not found say 9 was not in arr but 8 was
  return arr.length;
}

// console.log(missingNumCyclic(arr));
