var assert = require('assert');

describe('Solution', () => {
  it('Basic test', () => {
    assert.deepEqual(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);
  });
});

const filter_list = list => {
  return list.filter(Number.isInteger);
};
