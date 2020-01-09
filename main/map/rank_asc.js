'use strict';
var rank_asc = function(collection){
  collection.sort(function(a, b) { //TODO: 直接return 这行也可以吧
    return b - a;
  });
  return collection;
};

module.exports = rank_asc;
