const str = "aaaabbbccdddddwwww";

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

  return strObj;
}

console.log(maxChars(str));
