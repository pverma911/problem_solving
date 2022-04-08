var arr2 = [6, 2, 7, 8]; // assumption is that arr2 is bigger than arr1;
var arr1 = [7, 1, 9];

function diffOfArrays(arr1, arr2) {
  let ansArr = new Array(arr2.length);

  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let k = ansArr.length - 1;
  let diff = 0;
  let borrow = 0;

  while (k >= 0) {
    diff = arr2[j] - borrow;
    if (i >= 0) {
      diff -= arr1[i];
    }
    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    ansArr[k] = diff;
    k--;
    i--;
    j--;
  }
  return ansArr;
}

console.log(diffOfArrays(arr1, arr2));
