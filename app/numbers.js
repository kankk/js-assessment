exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    const bitStr = (num).toString(2);
    return parseInt(bitStr[bitStr.length - bit]);
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    let bitStr = (num).toString(2);
    while (bitStr.length < 8) {
      bitStr = '0' + bitStr;
    }
    return bitStr;
  },

  multiply: function (a, b) {
    let precision = 0;
    let aPrecision = 0,
      bPrecision = 0;
    if (a.toString().includes('.')) {
      aPrecision = a.toString().split('.')[1].length;
    }
    if (b.toString().includes('.')) {
      bPrecision = b.toString().split('.')[1].length;
    }
    precision = Math.max(aPrecision, bPrecision);
    let precisionFactor = Math.pow(10, precision);
    return (a * precisionFactor) * (b * precisionFactor) / (Math.pow(precisionFactor, 2));
  }
};