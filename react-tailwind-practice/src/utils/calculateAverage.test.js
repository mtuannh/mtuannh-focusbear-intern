import { describe, expect, it } from 'vitest';
import { calculateAverage } from './calculateAverage';

describe('calculateAverage', () => {
    it('calculates the average of numbers', () => {
    expect(calculateAverage([10, 20, 30])).toBe(20);
    });

    it('returns 0 for an empty array', () => {
    expect(calculateAverage([])).toBe(0);
    });

    it('returns 0 for invalid input', () => {
    expect(calculateAverage(null)).toBe(0);
    });

    it('returns 0 when the array contains non-numbers', () => {
    expect(calculateAverage([10, '20', 30])).toBe(0);
    });
});