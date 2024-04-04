function stringToNumber(str) {
    let number = 0;
    const isNegative = str[0] === '-';
    const startIndex = isNegative ? 1 : 0;
  
    for (let i = startIndex; i < str.length; i++) {
      const digit = str.charCodeAt(i) - 48;
      number = number * 10 + digit;
    }
  
    return isNegative ? -number : number;
  }
  
  String.prototype.divide = function(string) {
    const num1 = this;
    const num2 = string;
    
    const dividend = stringToNumber(num1);
    const divisor = stringToNumber(num2);
  
    if (divisor === 0) {
      throw new Error("Division by zero.");
    }
  
    let quotientSign = 1;
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
      quotientSign = -1;
    }
  
    let absDividend = dividend < 0 ? -dividend : dividend;
    const absDivisor = divisor < 0 ? -divisor : divisor;
  
    let quotient = 0;
    while (absDividend >= absDivisor) {
      absDividend -= absDivisor;
      quotient++;
    }
  
    quotient *= quotientSign;
  
    return quotient.toString();
  };
  
  //TESTING//
  const testCases = [
    ["1234", "2", "617"],
    ["1000", "1", "1000"],
    ["12345", "123", "100"],
    ["999", "11", "90"],
    ["0", "1", "0"],
  ];
  
  for (const testCase of testCases) {
    const result = testCase[0].divide(testCase[1]);
    console.log(`Expected: ${testCase[2]}, Actual: ${result}`);
  }
  