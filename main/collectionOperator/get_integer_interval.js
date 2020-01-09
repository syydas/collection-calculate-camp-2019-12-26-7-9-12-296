'use strict';

function get_integer_interval(number_a, number_b) {
  var res = [];
  if (number_b > number_a) {
    for (var item = number_a; item <= number_b; item++) {
      res.push(item);
    }
  } else if (number_a > number_b) {
    for (var item = number_a; item >= number_b; item--) {
      res.push(item);
    }
  } else if (number_a === number_b) {
    res.push(number_a)
  } //TODO: 相等的情况应该可以和上面合起来
  return res;
}

module.exports = get_integer_interval;

