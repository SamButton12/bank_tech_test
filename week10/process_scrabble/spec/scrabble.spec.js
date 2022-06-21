const scrabble = require('../lib/scrabble')

describe("scrabble", () => {
  it("returns 0 given an empty string", () => {  
    expect(scrabble('')).toEqual(0)
  });
  
  it("returns 0 if input is not a string", () => {
    expect(scrabble(9)).toEqual(0);
  });
});