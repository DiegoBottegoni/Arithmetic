String.prototype.divide = function (string) {
    const str1 = this.toString();
    const str2 = string.toString();
  
    if (str2 === '0') {
      throw new Error("Error: Division by zero");
    }
  
    const isNegative = (str1[0] === '-' && str2[0] !== '-') || (str1[0] !== '-' && str2[0] === '-');
    const dividend = str1.replace('-', '');
    const divisor = str2.replace('-', '');
  
    let quotient = '';
    let remainder = '0';
  
    for (let i = 0; i < dividend.length; i++) {
      remainder += dividend[i];
      let quotientDigit = 0;
      while (parseInt(remainder) >= parseInt(divisor)) {
        remainder = subtract(remainder, divisor);
        quotientDigit++;
      }
      quotient += quotientDigit;
    }
  
    return isNegative ? '-' + quotient.replace(/^0+/, '') : quotient.replace(/^0+/, '') || '0';
  };
  
  function subtract(str1, str2) {
    let result = '';
    let carry = 0;
  
    while (str2.length < str1.length) {
      str2 = '0' + str2;
    }
  
    for (let i = str1.length - 1; i >= 0; i--) {
      let digit1 = parseInt(str1[i]);
      let digit2 = parseInt(str2[i]);
      let subtraction = digit1 - digit2 - carry;
      if (subtraction < 0) {
        subtraction += 10;
        carry = 1;
      } else {
        carry = 0;
      }
      result = subtraction.toString() + result;
    }
  
    return result.replace(/^0+/, '');
  }
  
  // TESTING //
  const testCases = [
    ["1234", "2", "617"],
    ["1000", "1", "1000"],
    ["12345", "123", "100"],
    ["999", "11", "90"],
    ["0", "1", "0"],
    ["123", "0", "Error"],
    ["4444444444444444444444444444444440000000000000000000000000000000", "2", "2222222222222222222222222222222220000000000000000000000000000000"],
    ["444444444444444444444444444444444000", "444444444444444444444444444444444", "1000"],
  ];
  
  for (const testCase of testCases) {
    try {
      const result = testCase[0].divide(testCase[1]);
      console.log(`Expected: ${testCase[2]}, Actual: ${result}`);
    } catch (error) {
      console.log(`Expected: ERROR: ${error.message}`);
    }
  }
