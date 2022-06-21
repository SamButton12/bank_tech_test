const scrabble = require('../lib/scrabble')

describe("scrabble", () => {
  it("returns 0 given an empty string", () => {  
    expect(scrabble('')).toEqual(0)});
});