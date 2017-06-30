exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  aValueAtBit: function (num, bit) {
    return 1 & (num >> (bit - 1));
  },
  valueAtBit: function (num, bit) {
    const bitStr = (num).toString(2);
    return parseInt(bitStr[bitStr.length - bit]);
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  aConvertToBinary: function (num) {
    var arr = [];

    for (var i = 7; i > -1; i--) {
      arr.push(num & (1 << i) ? 1 : 0);
    }

    return arr.join('');
  },

  convertToBinary: function (num) {
    let bitStr = (num).toString(2);
    while (bitStr.length < 8) {
      bitStr = '0' + bitStr;
    }
    return bitStr;
  },

  aMultiply: function (a, b) {
    a = adjust(a);
    b = adjust(b);

    var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

    return result;

    function adjust(num) {
      var exponent, multiplier;

      if (num < 1) {
        exponent = Math.floor(Math.log(num) * -1);
        multiplier = Math.pow(10, exponent);

        return {
          adjusted: num * multiplier,
          multiplier: multiplier
        };
      }

      return {
        adjusted: num,
        multiplier: 1
      };
    }
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