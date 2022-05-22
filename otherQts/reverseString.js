const str = "Hello";
let revS = "";

const data = str.split("").reduce((a, strs) => {
  a = strs + a;
  return a;
}, "");

console.log(data);
