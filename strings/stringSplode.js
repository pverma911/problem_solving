// https://codingbat.com/prob/p117334

function splosion(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.substring(0, i + 1);
  }
  return result;
}

console.log(splosion("Code")); // O/P --> CCoCodCode
