// perform a selection sort on an array of numbers
//
// More notes in copy
let arr = [5, 2, 4, 1, 3];

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // run loop till n-1 cauz last one will be always be max
    let min = i; // set minimun to ith

    for (let j = i + 1; j < array.length; j++) {
      // comparing to get minimum
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      // swapping minimum with the current i
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

console.log(selectionSort(arr));
