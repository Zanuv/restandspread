// Given this function
// Refactor it to use the rest operator and arrow function
// Write an ES2015 Version

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Write a function called findMin that accepts a variable number of arguments
// and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
/* 
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1 */

function findMin() {}

// Write a function called mergeObjects that acceots two objects
// and returns a new object which contains all the keys and values
// of the first object and second object.
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects() {}
