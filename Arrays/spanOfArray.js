// It is the d/f b/w min and the max of array

let arr = [6, 15, 30, 40, 4, 11, 9];
let largest = arr[0];
let smallest = arr[0];

function spanOfArray(arr) {
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > largest) {
      largest = arr[index];
    } else if (arr[index] < smallest) {
      smallest = arr[index];
    }
  }

  return largest - smallest;
}

console.log(spanOfArray(arr));
