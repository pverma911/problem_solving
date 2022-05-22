let arr = [4, 3, 2, 7, 8, 2, 3, 1];

let filtered = arr.filter((a, i) => {
  return arr.indexOf(a) == i;
});
