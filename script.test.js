const format_date = require('./script.js');

test('full format UTC', () => {
  expect(format_date('Sun Mar 12 2023 13:20:01 GMT+0300')).toBe('12.03.2023');
});

test('miliseconds', () => {
    expect(format_date('1678616401000')).toBe('12.03.2023');
  });

test('short format', () => {
expect(format_date('Mar 12 2023')).toBe('12.03.2023');
});

