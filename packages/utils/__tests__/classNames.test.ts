import classNames from '../classNames';

describe('classNames', () => {
  it('receives no strings. Should return empty string', () => {
    const result = classNames();
    expect(result).toBe('');
  });

  it('recieves strings, falses and undefined. Should return certain string', () => {
    const result = classNames(
      undefined,
      'a',
      false,
      'b',
      undefined,
      false,
      false,
      'c',
      'd',
      undefined
    );
    expect(result).toBe('a b c d');
  });
});
