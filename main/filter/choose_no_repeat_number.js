"use strict";

function choose_no_repeat_number(collection) {
  var res = [collection[0]];
  for (var i = 1; i < collection.length; i++) {
    if (i === collection.indexOf(collection[i])) {
      res.push(collection[i]);
    }
  }
  return res;
}

module.exports = choose_no_repeat_number;
