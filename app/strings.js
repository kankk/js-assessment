exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    const strInfo = {
      lastChar: '',
      count: 0,
    };
    const strArr = [];
    for (let c of str) {
      if (c !== strInfo.lastChar) {
        strArr.push(c);
        strInfo.lastChar = c;
        strInfo.count = 0;
        strInfo.count++;
      } else {
        if (strInfo.count < amount) {
          strArr.push(c);
        }
        strInfo.lastChar = c;
        strInfo.count++;
      }
    }
    return strArr.join("");
  },

  wordWrap: function (str, cols) {

  },

  reverseString: function (str) {
    return str.split("").reverse().join("");
  }
};