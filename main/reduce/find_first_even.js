'use strict';

function find_first_even(collection) {
  for (var item of collection) {
    if (0 === item % 2) {
      return item;
      break; //TODO: 这个break没用吧？
    }
  }
}

module.exports = find_first_even;

