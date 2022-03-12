let arr = ["a", "c", "f", "g"];

let x = "b";

// OR

// let arr = ['a','c','f','g']
// let x ='g'

function binSearch(arr, x) {
  let end = arr.length - 1;

  let start = 0;
  let count = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    console.log(
      count++,
      " ",
      "Start val: ",
      start,
      "End val: ",
      end,
      "Mid val: ",
      mid,
      "Mid actually: ",
      arr[mid]
    );

    if (arr[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log("Ending now ====>", start, " ", arr.length, " ", end);
  return arr[start % arr.length];
}

let res = binSearch(arr, x);
console.log("Result ==>", res);
