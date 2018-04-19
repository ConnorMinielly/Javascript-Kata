var assert = require('assert');

describe('Outlier Test', () => {
  it('test 1', () => {
    assert.equal(findOutlier([0, 1, 2]), 1);
  });
  it('test 2', () => {
    assert.equal(findOutlier([1, 2, 3]), 2);
  });
  it('test 3', () => {
    assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
  });
  it('test 4', () => {
    assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
  });
  it('test 4', () => {
    assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
  });
});

findOutlier = integers => {
  let counter = {
    evens: integers.filter(i => isEvenOrZero(i)),
    odds: integers.filter(i => !isEvenOrZero(i)),
  };
  return counter.evens.length == 1 ? counter.evens[0] : counter.odds[0];
};
isEvenOrZero = val => {
  return val == 0 || val % 2 == 0;
};
