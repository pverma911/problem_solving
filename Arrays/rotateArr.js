let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let rotation = 2; // means [8,9,1,2....]

function rotateArr(arr, rotation) {
  rotation = rotation % arr.length; // we do this as say if length is 9 and rotation is 10, so basically rotation is 1 and so on....
  if (rotation < 0) {
    rotation += arr.length; // handling -ve rotation, you basically have to rotate the sum here basically say, r = -2, final r = 7
  }
  let reversedArr = reverseWholeArr(arr); // [9,8,7,6,5,4,3,2,1]
  let reverseBeginning = reverseBegin(reversedArr, rotation); // [8,9,7,6,5,4,3,2,1]
  let reverseEnding = reverseEnd(reverseBeginning, rotation); // [ 8, 9, 1, 2, 3 , 4, 5, 6, 7]
  return reverseEnding;
}

function reverseWholeArr(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function reverseBegin(reversedArr, rotation) {
  let start = 0;
  let end = rotation - 1; // 2

  while (start < end) {
    let temp = reversedArr[start];
    reversedArr[start] = reversedArr[end];
    reversedArr[end] = temp;
    start++;
    end--;
  }
  return reversedArr;
}

function reverseEnd(reverseBeginning, rotation) {
  let start = rotation;
  let end = reverseBeginning.length - 1;

  while (start < end) {
    let temp = reverseBeginning[start];
    reverseBeginning[start] = reverseBeginning[end];
    reverseBeginning[end] = temp;
    start++;
    end--;
  }
  return reverseBeginning;
}

console.log(rotateArr(arr, rotation));
