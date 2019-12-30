'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var res = [];
  collection.forEach(function(item) {
    if (item instanceof Array) {
      item.forEach(function(itemIn) {
        res.push(itemIn);
      })
    }
    else {
      res.push(item);
    }
  });
  return res;
  //return (collection + '').split(',').map(x => Number(x));
}

module.exports = double_to_one;
