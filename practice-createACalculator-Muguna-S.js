// Calculator object with all required functions
const calculator = {
    // 1. Absolute Value
    absoluteValue: function (num) {
      return Math.abs(num);
    },
  
    // 2. Power Calculation
    power: function (base, exponent) {
      return Math.pow(base, exponent);
    },
  
    // 3. Square Root
    squareRoot: function (num) {
      return Math.sqrt(num);
    },
  
    // 4. Max and Min from Array
    maxMin: function (numbers) {
      return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)
      };
    },
  
    // 5. Random Integer in Range
    randomInRange: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  
    // 6. Custom Rounding
    customRound: function (num, decimals) {
      const factor = Math.pow(10, decimals);
      return Math.round(num * factor) / factor;
    }
  };
  
  // ✅ Test 
  console.log("Absolute value of -45.67:", calculator.absoluteValue(-45.67));
  console.log("5 raised to the power of 3:", calculator.power(5, 3));
  console.log("Square root of 144:", calculator.squareRoot(144));
  console.log("Max and Min of [3, 78, -12, 0.5, 27]:", calculator.maxMin([3, 78, -12, 0.5, 27]));
  console.log("Random number between 1 and 50:", calculator.randomInRange(1, 50));
  console.log("23.67891 rounded to 2 decimal places:", calculator.customRound(23.67891, 2));
  