exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    const iterateArr = [];
    for(let key of Object.getOwnPropertyNames(obj)) {
      iterateArr.push(`${key}: ${obj[key]}`); 
    }
    return iterateArr;
  }
};
