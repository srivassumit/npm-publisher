"user strict";

var expect = require("chai").expect;
var index = require("../dist/index.js");

describe("get power test", () => {
  it("should return square", () => {
    var result = index.getPow(2);
    expect(result).to.equal(4);
  });
});
