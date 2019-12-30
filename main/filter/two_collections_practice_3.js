'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var res = [];
  collection_a.forEach(function(item_a) {
    collection_b.forEach(function(item_b) {
      if (0 === item_a % item_b) {
        res.push(item_a);
      }
    })
  });
  return res;
}

module.exports = choose_divisible_integer;
