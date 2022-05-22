const sumTill = 10;

function calcSum(value, sum) {
  if (value === 0) {
    return sum;
  }

  sum = value + sum;

  return calcSum(value - 1, sum);
}

console.log(calcSum(sumTill, 0));

function calcSum2(value) {
  if (value <= 1) {
    return value;
  }

  return value + calcSum2(value - 1);
}

console.log(calcSum2(sumTill));
