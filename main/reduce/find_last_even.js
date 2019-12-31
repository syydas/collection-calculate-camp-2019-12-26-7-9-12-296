'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var res = 0;
  for (var item of collection) {
    if (0 === item % 2) {
      res = item;
    }
  }
  return res;
}

module.exports = find_last_even;
