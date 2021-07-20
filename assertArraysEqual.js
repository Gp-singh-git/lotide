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
  if(eqArrays(actual, expected)) {
  console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
  console.log(String.fromCodePoint(0x1F621) + String.fromCodePoint(0x1F621) +  `Assertion Failed: ${actual}  !==  ${expected}`);
  }
};
  

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,3,3]);
assertArraysEqual([1,2,3],[1,2,"3"]);