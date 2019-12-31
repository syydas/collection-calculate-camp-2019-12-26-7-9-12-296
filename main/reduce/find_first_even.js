'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for (var item of collection) {
    if (0 === item % 2) {
      return item;
      break;
    }
  }
}

module.exports = find_first_even;

