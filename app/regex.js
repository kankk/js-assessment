exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function (str) {
    return /([a-zA-Z])\1{1,}/.test(str);
  },

  endsWithVowel: function (str) {
    return /[aAeEiIoOuU]$/.test(str);
  },

  captureThreeNumbers: function (str) {
    const result = /\d{3,}?/.exec(str);
    if (!result) {
      return false;
    } else {
      return result[0];
    }
  },

  matchesPattern: function (str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD: function (str) {
    return /^\$(\d{1,3})(,\d{3}){0,}(\.\d{2})?$/.test(str);
  }
};