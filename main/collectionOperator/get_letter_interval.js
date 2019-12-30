'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var res = [];
  var allCollect = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  if (number_b > number_a) {
    for (var i = number_a; i <= number_b; i++) {
      res.push(allCollect[i]);
    }
  } else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      res.push(allCollect[i]);
    }
  } else if (number_a === number_b) {
    res.push(allCollect[number_a]);
  }
  return res;
}

module.exports = get_letter_interval;
