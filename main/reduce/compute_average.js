'use strict';

function compute_average(collection) {
  /*var sum = collection.reduce((num1, num2) => {
    return num1 + num2;
  });*/ //TODO: delete comments
  var sum = 0;
  for (var item of collection) {
    sum += item;
  }
  var average = sum / collection.length;
  return average; //TODO: inline variable
}

module.exports = compute_average;

