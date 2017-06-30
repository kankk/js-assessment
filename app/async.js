exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {

  aAsync: function (value) {
    var dfd = $.Deferred();
    setTimeout(function () {
      dfd.resolve(value);
    }, 10);
    return dfd.promise();
  },

  async: function (value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  aManipulateRemoteData: function (url) {
    var dfd = $.Deferred();

    $.ajax(url).then(function (resp) {
      var people = $.map(resp.people, function (person) {
        return person.name;
      });
      dfd.resolve(people.sort());
    });

    return dfd.promise();
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