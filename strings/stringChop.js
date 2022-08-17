// https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php Q-17

function string_chop(str, len) {
  let i = str.length;
  let finalarr = [];

  let a = 0;
  let b = len;

  while (i) {
    let trun = str.slice(a, b);

    if (!trun) break;

    finalarr.push(trun);

    a = a + len;
    b = b + len;
  }

  return finalarr;
}

console.log(string_chop("w3resource", 2));
