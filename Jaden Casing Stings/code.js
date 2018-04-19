var assert = require('assert');

describe('Jaden Casing Test', () => {
  let str = "How can mirrors be real if our eyes aren't real";
  it('It Is Jaden Case', () => {
    assert.equal(
      str.toJadenCase(),
      "How Can Mirrors Be Real If Our Eyes Aren't Real",
    );
  });
});

String.prototype.toJadenCase = function() {
  return this.split(' ')
    .map(word => {
      return word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
    })
    .join(' ');
};
