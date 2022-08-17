// CH#3 https://javascript.plainenglish.io/javascript-coding-practice-challenges-strings-f2c9a98e8e5e

function reverseWords(str) {
  let res = str
    .split(" ")
    .map((st) => {
      return st.split("").reverse().join("");
    })
    .join(" ");

  return res;
}

console.log(reverseWords("I evol uoy os !hcum"));
