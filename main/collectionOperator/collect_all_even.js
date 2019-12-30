'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var res = [];
  collection.forEach(function(item) {
    if (0 === item % 2) {
      res.push(item);
    }
  });
  return res;
}

module.exports = collect_all_even;

