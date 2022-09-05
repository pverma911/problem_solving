let strs = ["flower", "flow", "flight"];

function prefixString() {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = prefixSetter(prefix, strs[i]);
  }

  return prefix;
}

function prefixSetter(num1, num2) {
  let pref = "";
  for (
    let i = 0, j = 0;
    i <= num1.length - 1 && j <= num2.length - 1;
    i++, j++
  ) {
    if (num1[i] != num2[j]) {
      break;
    }
    pref += num1[i];
  }
  return pref;
}
// console.log(prefixString());

// 2nd

// let strs = ["flower", "flow", "flight"];

function prefixString() {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      console.log("ran", i, " ", prefix);
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}

console.log("Index of ====>", strs[1].indexOf("flow"));
console.log(prefixString());
