const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F621) + String.fromCodePoint(0x1F621) +  `Assertion Failed: ${actual}  !==  ${expected}`);
  }
};
  
const without = function(source, itemsToRemove) {
  let newArray = [];
  let flag = false;
  for (let i in source) {
    for (let j in itemsToRemove) {
      if (source[i] === itemsToRemove[j]) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      newArray.push(source[i]);
    } else {
      flag = false;
    }
  }
  return newArray;
};
// assertArraysEqual(without([1,2,3,4], [2,4]), [1,3]);
// assertArraysEqual(without([6,5,2,1,9], [1,2]), [6,5,9]);
// assertArraysEqual(without([5,6,7,5,6,7,2,5], [5,2]), [6,7,6,7]);

module.exports = without;