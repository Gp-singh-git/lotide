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

const flatten = function(array1) {
  let answer = [];
  for (let x in array1) {
    if (Array.isArray(array1[x])) {
      for (let y in array1[x]) {
        answer.push(array1[x][y]);
      }
    } else {
      answer.push(array1[x]);
    }
  }
  return answer;
};

// assertArraysEqual(flatten([1,2,3,[4,5,6],7,8]), [1,2,3,4,5,6,7,8]);
// assertArraysEqual(flatten(["a","b",["c","d","e","f"],"g"]), ["a","b","c","d","e","f","g"]);

module.exports = flatten;