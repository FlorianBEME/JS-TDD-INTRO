const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("is a square", () => {
    const rectangle = new Rectangle(4, 4);
    assert.strictEqual(rectangle.isSquare(4, 4), true);
  });
  it("is not a square", () => {
    const rectangle = new Rectangle(6, 4);
    assert.strictEqual(rectangle.isSquare(6, 4), false);
  });
  it('checks if the area is correct', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(13, 7), 91);
  });

  it('checks if the perimeter is correct', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(13, 7), 40);
  });
});
