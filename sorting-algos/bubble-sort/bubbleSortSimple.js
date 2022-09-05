// Do a bubble sort on an array of numbers

// More notes in copy
let arr = [15, 22, 14, 11, 3];

function bubbleSort(array) {
  let swapped;

  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log(i, "  ", j);
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      // if swapped gets false , we break so that we don't move any further ahead cauz arr is already sorted no need to move further
      break;
    }
  }
  return array;
}

console.log(bubbleSort(arr));
