const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(String.fromCodePoint(0x1F621) + String.fromCodePoint(0x1F621) +  `Assertion Failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }

};
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let x in object1) {
    if (object2.hasOwnProperty(x) && typeof(object1[x]) === "object") {
      if (!eqArrays(object1[x], object2[x])) {
        return false;
      }
    } else if (object2.hasOwnProperty(x) && object1[x] === object2[x]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const aaa = {a: "2", b: [1,2,3], c: [4,5,6]};
const bbb = { b: [1,2,3], c: [4,5,6], a: "2"};

assertObjectsEqual(aaa, bbb);

const aaaa = {a: "2", b: [1,2,3], c: [4,5,6]};
const bbbb = { b: [1,2,3], c: [4,6,6], a: "2"};

assertObjectsEqual(aaaa, bbbb);

const aaaaa = {a: "2", b: [1,2,3], c: [4,5,6]};
const bbbbb = { b: [1,2,3], c: [4,5,6], e: "2"};

assertObjectsEqual(aaaaa, bbbbb);
