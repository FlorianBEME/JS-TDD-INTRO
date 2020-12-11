// test/capitalizeFirst.test.js
const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters.js");

// give the test suite a label using describe
describe("capitalizeFirstLetters", () => {
  // give the test a label using it
  it("capitalizeFirst transforms javaScript correctly", () => {
    assert.strictEqual(
        capitalizeFirstLetters("javaScript test hello"),
      "Javascript Test Hello"
    );
  });
  it("Check that it works for a 1-character string", () => {
    assert.strictEqual(capitalizeFirstLetters("z"), "Z");
  });
  it("Check that it works for an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
