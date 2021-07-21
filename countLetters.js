const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F621) + String.fromCodePoint(0x1F621) +  `Assertion Failed: ${actual}  !==  ${expected}`);
  }

};


const countLetters = function(str) {
  let answer = {};
  for (let x of str) {
    if (!answer.hasOwnProperty(x) && x!==" ") {
      answer[x] =1;
    } else if (answer.hasOwnProperty(x)) {
      answer[x] += 1;
    }
  }
  return answer;
};


console.log(countLetters("I love these new functions and love them all"));
assertEqual(countLetters("I love these new functions and love them all")["l"],4);


