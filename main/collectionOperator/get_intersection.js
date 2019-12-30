'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var res = [];
  collection_b.forEach(item_b => {
    collection_a.forEach(item_a => {
      if (item_a === item_b) {
        res.push(item_b);
      }
    })
  });
  return res;
} 

module.exports = get_intersection;
