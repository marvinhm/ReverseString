const reverseString = require('../app');

// const reverseString = jest.fn(() => 'a');

test('reverse function to return string', () => {
let str_arg = 'a';

  expect(typeof reverseString(str_arg)).toBe('string');
});

test("return the string 'a' if the argument is 'a'", () => {
  let str_arg = 'a';
  expect(reverseString(str_arg)).toEqual('a');
});

test("return the string 'aa' if the argument is 'aa'", () => {
  let str_arg = 'aa';
  expect(reverseString(str_arg)).toEqual('aa');
});