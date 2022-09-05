/*
Ques 1
 *
 **
 ***
 ****

 */

const printPattern = (n) => {
  let pattern = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      // as cols and rows are of same size
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
};

let n = 4;
printPattern(n);
