const assert = require('chai').assert;
const tail = require('../tail');

describe("Testing tail for different values", () => {

it("tail([\"Hello\", \"Lighthouse\", \"Labs\"]) should return [\"Lighthouse\", \"Labs\"]", () => {
  assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"] )
});

it("tail([5,6,7]) should return [6,7]", () => {
  assert.deepEqual(tail([5,6,7]),[6,7]);
});
});
