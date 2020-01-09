'use strict';
var rank_desc = function(collection){
  collection.sort(function(a, b) { //TODO: 直接return 这行也可以吧
    return a - b;
  });
  return collection;
};

module.exports = rank_desc;
