String.prototype.multiply = function(string) {
  const addStrings = (num1, num2) => {
      let result = '';
      let carry = 0;
      for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
          const digit1 = i < 0 ? 0 : parseInt(num1[i]);
          const digit2 = j < 0 ? 0 : parseInt(num2[j]);
          const sum = digit1 + digit2 + carry;
          result = (sum % 10) + result;
          carry = sum >= 10 ? 1 : 0;
      }
      return result;
  };

  if (this === '0' || string === '0') return '0';

  let result = '0';

  for (let i = string.length - 1, zeroCount = 0; i >= 0; i--, zeroCount++) {
      const digit = parseInt(string[i]);
      if (digit === 0) continue;
      let tempResult = '';
      let carry = 0;

      for (let j = 0; j < zeroCount; j++) {
          tempResult += '0';
      }

      for (let j = this.length - 1; j >= 0; j--) {
          const multiplicandDigit = parseInt(this[j]);
          const product = digit * multiplicandDigit + carry;
          tempResult = (product % 10) + tempResult;
          carry = (product / 10) | 0;
      }

      if (carry > 0) {
          tempResult = carry + tempResult;
      }

      result = addStrings(result, tempResult);
  }

  return result;
};

//TESTING//

const num1 = "123";
const num2 = "456";
const product = num1.multiply(num2);

const num3 = "3";
const num4 = "2";
const product2 = num3.multiply(num4);

console.log(`Multiply: ${num1} * ${num2} = ${product}`);
console.log(`Multiply: ${num3} * ${num4} = ${product2}`);
