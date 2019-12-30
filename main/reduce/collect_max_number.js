'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var max = collection[0];
  collection.forEach(function(item) {
    if (item > max) {
      max = item;
    }
  });
  return max;
}

module.exports = collect_max_number;
