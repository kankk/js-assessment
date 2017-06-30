exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
aListFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    function processDir(dir) {
      var i;
      var len;
      var file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    processDir(data);


    return listOfFiles;
  },

  listFiles: function (data, dirName) {

  },

  aPermute: function(arr) {
    // http://stackoverflow.com/a/11509565/54468
    var temp = [];
    var answer = [];

    function logResult() {
      answer.push(
        // make a copy of temp using .slice()
        // so we can continue to work with temp
        temp.slice()
      );
    }

    function doIt() {
      var i;
      var len;
      var item;

      for (i = 0, len = arr.length; i < len; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];

        // add that item to the array we're building up
        temp.push(item);

        if (arr.length) {
          // if there's still anything left in the array,
          // recurse over what's left
          doIt();
        } else {
          // otherwise, log the result and move on
          logResult();
        }

        // restore the item we removed at index i
        // and remove it from our temp array
        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return doIt();
  }

  permute: function (arr) {

  },

  fibonacci: function (n) {
    if (n <= 2) {
      return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function (n) {

  }
};