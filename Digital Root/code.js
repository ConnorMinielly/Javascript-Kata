var assert = require('assert');

describe('Solution', () => {
  it('942 resloves to 6', () => {
    assert.equal(digital_root(942), 6);
  });
  it('493193 resloves to 2', () => {
    assert.equal(digital_root(493193), 2);
  });
});

const digital_root = num => {
  if (num < 10) return num;
  return digital_root(
    num
      .toString()
      .split('')
      .reduce((acc, cur) => {
        return acc + Number(cur);
      }, 0),
  );
};
