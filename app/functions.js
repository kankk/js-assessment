exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function (fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function (str) {
    return function (str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures: function (arr, fn) {
    return arr.map(a => {
      return function () {
        return fn(a);
      }
    });
  },

  partial: function (fn, str1, str2) {
    return function (str3) {
      return fn.call(null, str1, str2, str3);
    }
  },

  useArguments: function () {
    // ES6之前
    // return Array.prototype.slice.call(arguments).reduce((x, y) => {
    //   return x + y;
    // });

    // ES6
    return Array.from(arguments).reduce((x, y) => {
      return x + y;
    });
  },

  callIt: function (fn) {
    // ES6之前
    // return fn.apply(null, Array.prototype.slice.call(arguments, 1));

    // ES6
    return fn.apply(null, Array.from(arguments).slice(1));
  },

  partialUsingArguments: function (fn) {
    const args = Array.from(arguments).slice(1);
    return function () {
      return fn.apply(null, args.concat(Array.from(arguments)));
    }
  },

  aCurryIt: function (fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
  },

  curryIt: function (fn) {

  }
};