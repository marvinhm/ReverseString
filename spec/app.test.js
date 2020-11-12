const reverseString = require('../app');

test('reverse function to return string', () => {
  expect(typeof reverseString()).toBe('string');
});