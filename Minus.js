String.prototype.minus = function(string) {
    let borrow = 0;
    let result = "";
    const num1 = this.split("").reverse();
    const num2 = string.split("").reverse();
    const maxLength = Math.max(num1.length, num2.length);
  
    for (let i = 0; i < maxLength; i++) {
      const digit1 = Number(num1[i] || 0);
      const digit2 = Number(num2[i] || 0);
      let difference = digit1 - digit2 - borrow;
      borrow = difference < 0 ? 1 : 0;
      difference = difference < 0 ? difference + 10 : difference;
      result = difference + result;
    }
  
    return result.replace(/^0+/, "");
  }

  //TESTING//
  
const testCases = [
    ["123", "45", "78"],
    ["999", "100", "899"],
    ["1000", "99", "901"],
    ["9", "1", "8"],
  ];
  
  for (const testCase of testCases) {
    const difference = testCase[0].minus(testCase[1]);
    console.log(`Expected: ${testCase[2]}, Actual: ${difference}`);
    if (difference !== testCase[2]) {
      console.error("Test case failed!");
    }
  }