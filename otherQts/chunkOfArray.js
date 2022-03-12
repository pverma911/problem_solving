let arr = [1, 2, 3, 4, 5];

let size = 2;

function createChunk(arr, size) {
  const chunked = [];
  for (let elem of arr) {
    const last = chunked[chunked.length - 1]; // is an array (subarray to be specific)

    if (!last || last.length === size) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
}

console.log(createChunk(arr, size));
