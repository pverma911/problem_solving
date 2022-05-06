// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

let arr = [4, 3, 2, 7, 8, 2, 3, 1]; // works even if array has duplicates

function dissapearingNums(arr) {
  console.log("My Answer: ", arr);
  let i = 0;
  let dissapearing = [];

  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] !== arr[correct]) {
      let temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) dissapearing.push(i + 1); // as array is starting from 1
  }
  return dissapearing;
}

console.log(dissapearingNums(arr));
