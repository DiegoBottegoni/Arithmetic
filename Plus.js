String.prototype.plus = function(string) {
    let carry = 0;
    let result = "";
    const num1 = this.split("").reverse();
    const num2 = string.split("").reverse();
    const maxLength = num1.length > num2.length ? num1.length : num2.length;
  
    for (let i = 0; i < maxLength; i++) {
      const digit1 = num1[i] ? Number(num1[i]) : 0;
      const digit2 = num2[i] ? Number(num2[i]) : 0;
      const sum = digit1 + digit2 + carry;
      carry = sum > 9 ? 1 : 0;
      result = (sum % 10) + result;
    }
  
    if (carry > 0) {
      result = carry + result;
    }
  
    return result;
  };
  
  //TESTING//
  
  const sum1 = "123".plus("456");
  const sum2 = "999".plus("1");
  const sum3 = "10".plus("20");
  
  console.log("Sum of 123 and 456:", sum1);
  console.log("Sum of 999 and 1:", sum2);
  console.log("Sum of 10 and 20:", sum3);
  