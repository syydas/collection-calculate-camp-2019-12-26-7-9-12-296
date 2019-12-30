'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var res = [];
  collection.forEach(function(item) {
    if (0 === item % 3) {
      res.push(item);
    }
  });
  return res;
}

module.exports = choose_multiples_of_three;
