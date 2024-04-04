String.prototype.multiply = function(string) {
    const num1 = BigInt(this);
    const num2 = BigInt(string);
    const product = num1 * num2;
    return product.toString();
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