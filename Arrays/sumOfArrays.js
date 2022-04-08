var arr1 = [9, 4, 3, 1];
var arr2 = [9, 9, 4];

function sumOfArrays(arr1, arr2) {
  var ansArr = new Array(arr1.length > arr2.length ? arr1.length : arr2.length); // creating empty array of largest size

  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let k = ansArr.length - 1;
  let carry = 0;
  let sum = 0;

  while (k >= 0) {
    sum = carry;

    if (i >= 0) {
      sum += arr1[i];
    }

    if (j >= 0) {
      sum += arr2[j];
    }

    let quesiont = Math.floor(sum / 10); // everything except last number, will be carry forward
    let remainder = sum % 10; // last digit of sum, will be added to array

    carry = quesiont;
    ansArr[k] = remainder;

    i--, j--, k--;
  }

  if (carry !== 0) {
    ansArr.unshift(carry);
  }

  return ansArr;
}

console.log(sumOfArrays(arr1, arr2));
