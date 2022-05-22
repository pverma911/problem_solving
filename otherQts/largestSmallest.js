let array = [4, 6, 2, 1, 9, 10, 5, 6];

let smallest = array[0];
let largest = 0;
for (let index = 0; index < array.length; index++) {
  if (largest < array[index]) {
    largest = array[index];
  } else if (smallest > array[index]) {
    smallest = array[index];
  }
}
console.log(smallest, largest);
