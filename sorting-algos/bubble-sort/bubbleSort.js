// Do a bubble sort on an array of numbers

// More notes in copy
let arr = [5, 2, 4, 1, 3];

function bubbleSort(array) {
  let swapped;

  for (let i = 0; i < array.length; i++) {
    swapped = false;
    for (let j = 1; j < array.length - i; j++) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort(arr));
