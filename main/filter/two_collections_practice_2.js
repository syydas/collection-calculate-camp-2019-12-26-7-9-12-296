'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var res = [];
  collection_a.forEach(function(item) {
    if (-1 === collection_b.indexOf(item)) {
      res.push(item);
    }
  });
  return res;
}

module.exports = choose_no_common_elements;
