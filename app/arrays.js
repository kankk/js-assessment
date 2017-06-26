exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    for (let [index, value] of arr.entries()) {
      if (value === item) return index;
    }
    return -1;
  },

  sum: function (arr) {
    let sum = 0;
    for (let item of arr) {
      sum += item;
    }
    return sum;
  },

  remove: function (arr, item) {
    const arrTemp = [];
    for (let i of arr) {
      if (i !== item) {
        arrTemp.push(i);
      }
    }
    return arrTemp;
  },

  removeWithoutCopy: function (arr, item) {
    for (let i = 0; i < arr.length;) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    // return arr.concat(item);
    return [...arr, item];
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    // arr.splice(0, 0, item);
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    let count = 0;
    for (let i of arr) {
      if (i === item) count++;
    }
    return count;
  },

  duplicates: function (arr) {
    const firstArr = [];
    const duplicatesArr = [];
    for (let a of arr) {
      if (firstArr.includes(a) && !duplicatesArr.includes(a)) {
        duplicatesArr.push(a);
      } else {
        firstArr.push(a);
      }
    }
    return duplicatesArr;
  },

  square: function (arr) {
    return arr.map(a => {
      return a * a;
    });
  },

  findAllOccurrences: function (arr, target) {
    const indexArr = [];
    for (let [index, value] of arr.entries()) {
      if (value === target) {
        indexArr.push(index);
      }
    }
    return indexArr;
  }
};