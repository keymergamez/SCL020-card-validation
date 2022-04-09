const validator = {
  isValid(creditCardNumber) {
      if (creditCardNumber === null || (isNaN(creditCardNumber) === true)) {
          return false
      }

      let sum = 0;
      let cardNumberArray = creditCardNumber.split("");

      for (let i = 0; i <= cardNumberArray.length - 1; i++) { 
          cardNumberArray[i] = parseInt(cardNumberArray[i], 10);
          if (i % 2 === 0) {
              cardNumberArray[i] *= 2;
              if (cardNumberArray[i] > 9) {
                  cardNumberArray[i] = (cardNumberArray[i] % 10) + 1;
              };
          };
          sum += cardNumberArray[i];

          
      }

      if (sum % 10 === 0 && sum !== 0) {
          return true
      }

      return false
  },
  maskify(creditCardNumber) {
      return creditCardNumber.slice(0, -4).replace(/./g, "#") + creditCardNumber.slice(-4); // P RGEXP
  }
}

export default validator;

// 5491621005008394
// ############8394
