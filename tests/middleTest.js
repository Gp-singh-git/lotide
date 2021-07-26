const assert = require('chai').assert;
const middle = require('../middle');


describe("Testing middle for different values", ()=> {

it("middle([1,2,3,4,5]) should be equal to [3]", ()=> {
  assert.deepEqual(middle([1,2,3,4,5]),[3]);
});

it("middle([1,2,3,4,5,6,7,8]) should be equal to [4,5]", ()=> {
  assert.deepEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);
});

it("middle([1,2]) should be equal to []", ()=> {
  assert.deepEqual(middle([1,2]),[]);
});


});
