const str = "aaaabbbccdddddwwwwwwwww";

function maxChars(str) {
  const strArr = str.split("");
  let strObj = {};

  // Create unique key/value pairs of each alphabet string with the number of times they are repeated
  for (let string of strArr) {
    if (strObj[string]) {
      strObj[string]++;
    } else {
      strObj[string] = 1;
    }
  }

  // Find largest out of them

  let largestNo = 0;
  let largestStr = "";
  for (let key in strObj) {
    console.log(key + ": " + strObj[key]);
    if (largestNo < strObj[key]) {
      largestNo = strObj[key];
      largestStr = key;
    }
  }

  return largestStr;
}

console.log(maxChars(str));
