'use strict';
function one_add_next_multiply_three(collection){
  var res = [];
  for (var i = 0; i < collection.length - 1; i++) {
    var item = (collection[i] + collection[i + 1]) * 3;
    res.push(item);
  }
  return res;
}
module.exports = one_add_next_multiply_three;
