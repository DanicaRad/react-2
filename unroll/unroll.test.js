const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works", function() {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const unrolled = unroll(square);
    expect(unrolled).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
  });
  
  it("works with small square", function() {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const unrolled = unroll(smallerSquare);
    expect(unrolled).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it("works with tiny square", function() {
    const tinySquare = [
      [1, 2],
      [3, 4]
    ];
    const unrolled = unroll(tinySquare);
    expect(unrolled).toEqual([1, 2, 4, 3]);
  });

  it("returns message if not square array", function() {
    const notSquare = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
    ];
    const unrolled = unroll(notSquare);
    expect(unrolled).toEqual("array must be a square")
  });

});
