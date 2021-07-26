const assertEqual = require('../assertEqual');
const tail = require('../tail');

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

result = tail([5,6,7]);
assertEqual(result.length, 2);
assertEqual(result[0], 6);
assertEqual(result[1], 7);

console.log(tail([]));