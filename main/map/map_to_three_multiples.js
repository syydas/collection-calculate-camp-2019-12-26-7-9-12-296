'use strict';
var map_to_three_multiples = function(collections){
  //return collections.map(item => item * 3);
  var res = [];
  collections.forEach(item => {
    res.push(item * 3);
  });
  return res;
};

module.exports = map_to_three_multiples;
