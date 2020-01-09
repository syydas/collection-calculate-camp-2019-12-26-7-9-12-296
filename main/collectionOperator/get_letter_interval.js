'use strict';

function get_letter_interval(number_a, number_b) {
  var res = [];
  if (number_b > number_a) {
    for (var item = number_a; item <= number_b; item++) {
      res.push(String.fromCharCode(item + 96));
    }
  } else if (number_a > number_b) {
    for (var item = number_a; item >= number_b; item--) {
      res.push(String.fromCharCode(item + 96));
    }
  } else if (number_a === number_b) { //TODO: ===的情况和上面能合起来
    res.push(String.fromCharCode(number_a + 96));
  }
  return res;
}

module.exports = get_letter_interval;
