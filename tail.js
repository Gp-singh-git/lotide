const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F621) + String.fromCodePoint(0x1F621) +  `Assertion Failed: ${actual}  !==  ${expected}`);
  }

};


const tail = function(myArray) {
  return myArray.slice(1);
};

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

result = tail([5,6,7]);
assertEqual(result.length, 2);
assertEqual(result[0], 6);
assertEqual(result[1], 7);

console.log(tail([]));