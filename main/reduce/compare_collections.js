'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if (collection_a.length === collection_b.length) {
    for (var i = 0; i < collection_b.length; i++) {
      if (collection_a[i] === collection_b[i])
      return true;
    }
  }
  else {
    return false;
  }
  
  //return collection_a.sort().toString() === collection_b.sort().toString();
}

module.exports = compare_collections;


