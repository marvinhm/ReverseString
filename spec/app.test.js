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

test("return the string 'baa' if the argument is 'aab'", () => {
  let str_arg = 'aab';
  expect(reverseString(str_arg)).toEqual('baa');
});

test("return the string 'baaa' if the argument is 'aaab'", () => {
  let str_arg = 'aaab';
  expect(reverseString(str_arg)).toEqual('baaa');
});

test("return the string 'abc' if the argument is 'cba'", () => {
  let str_arg = 'abc';
  expect(reverseString(str_arg)).toEqual('cba');
});

test("return the string 'football' if the argument is 'llabtoof'", () => {
  let str_arg = 'football';
  expect(reverseString(str_arg)).toEqual('llabtoof');
});