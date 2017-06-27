exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function (url) {
    return new Promise((resolve, reject) => {
      const json = require('..' + url);
      const result = [];
      for (let people of json.people) {
        result.push(people.name);
      }
      resolve(result.sort());
    });
  }
};