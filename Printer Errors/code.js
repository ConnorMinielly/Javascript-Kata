var assert = require('assert');

describe('Solution', () => {
  it('Basic tests', () => {
    var s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
    assert.equal(printerError(s), '3/56');
  });
});

const printerError = code => {
  return `${code.split('').reduce((acc, cur) => {
    if (/[n-z]/i.test(cur)) return ++acc;
    else return acc;
  }, 0)}/${code.length}`;
};
