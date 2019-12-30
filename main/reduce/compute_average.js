'use strict';

function compute_average(collection) {
  //在这里写入代码
  /*var sum = collection.reduce((num1, num2) => {
    return num1 + num2;
  });*/
  var sum = 0;
  for (var i in collection) {
    sum += collection[i];
  }
  var average = sum / collection.length;
  return average;
}

module.exports = compute_average;

