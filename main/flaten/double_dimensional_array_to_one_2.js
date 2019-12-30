'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var res = [];
  collection.forEach(item => {
    item.forEach(itemIn => {
      if (-1 === res.indexOf(itemIn)) {
        res.push(itemIn);
      }
    })
  });
  return res;
}

module.exports = double_to_one;
