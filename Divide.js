function stringToNumber(str) {
  let number = 0;
  let isNegative = false;
  let startIndex = 0;

  if (str[0] === '-') {
    isNegative = true;
    startIndex = 1;
  }

  for (let i = startIndex; i < str.length; i++) {
    const digit = str.charCodeAt(i) - 48;
    number = (number * 10) + digit;
  }

  return isNegative ? -number : number;
}

String.prototype.divide = function (string) {
  const num1 = stringToNumber(this);
  const num2 = stringToNumber(string);

  if (num2 === 0) {
    throw new Error("Division by zero.");
  }

    let isNegative = false;
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    isNegative = true;
  }

    let absNum1 = num1;
  if (num1 < 0) {
    absNum1 = -num1;
  }
  let absNum2 = num2;
  if (num2 < 0) {
    absNum2 = -num2;
  }

    function divideHelper(dividend, divisor, quotient = 0) {
    if (dividend < divisor) {
      return { quotient, remainder: dividend };
    }

    let nextPowerOfTen = 1;
    let tempDivisor = divisor;
    while (tempDivisor * 10 < dividend) {
      tempDivisor *= 10;
      nextPowerOfTen *= 10;
    }

    const multipleOfDivisor = tempDivisor;
    let count = 0;
    while (dividend >= multipleOfDivisor) {
      dividend -= multipleOfDivisor;
      count++;
    }

    return divideHelper(dividend, divisor, quotient + count * nextPowerOfTen);
  }

  const result = divideHelper(absNum1, absNum2);
  return (isNegative ? '-' : '') + result.quotient.toString();
};

// TESTING //
const testCases = [
  ["1234", "2", "617"],
  ["1000", "1", "1000"],
  ["12345", "123", "100"],
  ["999", "11", "90"],
  ["0", "1", "0"],
  ["4444444444444444444444444444444440000000000000000000000000000000", "2", "2.2222222e+63"],
];

for (const testCase of testCases) {
  const result = testCase[0].divide(testCase[1]);
  console.log(`Esperado: ${testCase[2]}, Actual: ${result}`);
}
