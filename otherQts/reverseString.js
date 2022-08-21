const str = "Hello";
let revS = "";

const data = str.split("").reduce((a, strs) => {
  a = strs + a;
  return a;
}, "");

console.log(data);

// for (let i = 0; i < str.length; i++) {
//   revS = str[i] + revS;
// }

// console.log(revS);
