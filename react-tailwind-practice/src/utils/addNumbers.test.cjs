const { addNumbers } = require('./addNumbers.cjs');

describe('addNumbers', () => {
    test('adds two numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5);
    });

    test('handles negative numbers', () => {
    expect(addNumbers(-2, 5)).toBe(3);
    });

    test('returns zero when adding two zeros', () => {
    expect(addNumbers(0, 0)).toBe(0);
    });
});