'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var min = collection[0];
  collection.forEach(function(item) {
    if (item < min) {
      max = item;
    }
  });
  return min;
}

module.exports = collect_min_number;

