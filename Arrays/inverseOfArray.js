let arr = [1, 4, 3, 2, 0]; //
// O/P :  [4,0,3,2,1]

function inverse(arr) {
  let inv = new Array();
  for (let i = 0; i < arr.length; i++) {
    let pos = arr[i]; // pos = 1, pos = 4, ....
    inv[pos] = i; // arr[1] = 0, arr[4] = 1....
  }
  return inv;
}

console.log(inverse(arr));
