function count(str, match) {
  let i = 0;
  let strArr = str.split(" ");
  let cn = 0;

  while (i < strArr.length) {
    if (strArr[i].toUpperCase() === match.toUpperCase()) {
      cn += 1;
    }

    i++;
  }

  return cn;
}

console.log(count("The quick brown fox jumps over the lazy dog", "the"));
