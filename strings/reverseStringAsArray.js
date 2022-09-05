var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let temp = s[end];
    s[end] = s[start];
    s[start] = temp;

    start++;
    end--;
  }

  return s;
};

// 2nd solution

let arr = ["h", "e", "l", "l", "o"];
let str = arr.join("");

let reverseArr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseArr += str[i];
}
