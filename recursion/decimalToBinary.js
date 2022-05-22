const num = 233;

// dec to bin
function convertToBinary(num, result) {
  if (num === 0) {
    return result;
  }

  result = (num % 2) + result;
  return convertToBinary(Math.floor(num / 2), result);
}

console.log(convertToBinary(num, ""));
